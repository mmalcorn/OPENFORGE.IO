"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const url = require("url");
const tinylr = require("tiny-lr");
const ecstatic = require("ecstatic");
const opn = require("opn");
const http = require("http");
const https = require("https");
const chokidar_1 = require("chokidar");
const utils_1 = require("./utils");
const middlewares_1 = require("./middlewares");
const discover_1 = require("@ionic/discover");
const RESERVED_STENCIL_PATH = '/__stencil-dev-server__';
const optionInfo = {
    root: {
        default: 'www',
        type: String
    },
    verbose: {
        default: true,
        type: Boolean
    },
    html5mode: {
        default: true,
        type: Boolean
    },
    watchGlob: {
        default: '**/*',
        type: String
    },
    address: {
        default: '0.0.0.0',
        type: String
    },
    httpPort: {
        default: process.env.PORT || 3333,
        type: Number
    },
    liveReloadPort: {
        default: 35729,
        type: Number
    },
    additionalJsScripts: {
        default: '',
        type: String
    },
    config: {
        default: './stencil.config.js',
        type: String
    },
    ssl: {
        default: false,
        type: Boolean
    }
};
function run(argv) {
    console.log("These are the arguments: ", argv);
    return __awaiter(this, void 0, void 0, function* () {
        const cliDefaultedOptions = utils_1.parseOptions(optionInfo, argv);
        console.log("cliDefaultedOptions: ", cliDefaultedOptions);
        cliDefaultedOptions.additionalJsScripts = cliDefaultedOptions.additionalJsScripts
            .split(',')
            .filter((name) => !!name);
        const isVerbose = cliDefaultedOptions.verbose;
        const configOptions = yield utils_1.parseConfigFile(process.cwd(), cliDefaultedOptions.config);
        const options = Object.keys(cliDefaultedOptions).reduce((options, optionName) => {
            const newValue = (configOptions[optionName] == null) ?
                cliDefaultedOptions[optionName] :
                configOptions[optionName];
            options[optionName] = newValue;
            return options;
        }, {});
        const [foundHttpPort, foundLiveReloadPort] = yield Promise.all([
            utils_1.findClosestOpenPort(options.address, options.httpPort),
            utils_1.findClosestOpenPort(options.address, options.liveReloadPort),
        ]);
        const protocol = options.ssl ? 'https' : 'http';
        log(isVerbose, `Will serve requests using : ${protocol}`);
        const wwwRoot = path.resolve(options.root);
        const browserUrl = getAddressForBrowser(options.address);
        const [tinyLrServer, lrScriptLocation, emitLiveReloadUpdate] = yield createLiveReload(foundLiveReloadPort, options.address, wwwRoot, options.ssl); // Live Reload
        const jsScriptLocations = options.additionalJsScripts
            .map((filePath) => filePath.trim())
            .concat(lrScriptLocation);
        const fileWatcher = createFileWatcher(wwwRoot, options.watchGlob, emitLiveReloadUpdate, isVerbose); // File Watcher
        log(isVerbose, `watching: ${wwwRoot} ${options.watchGlob}`);
        const requestHandler = createHttpRequestHandler(wwwRoot, jsScriptLocations, options.html5mode);
        const httpServer = options.ssl ? https.createServer(yield utils_1.getSSL(), requestHandler).listen(foundHttpPort)
            : http.createServer(requestHandler).listen(foundHttpPort);
        log(true, `listening on ${protocol}://${browserUrl}:${foundHttpPort}`);
        log(isVerbose, `serving: ${wwwRoot}`);
        if (argv.indexOf('--no-open') === -1) {
            opn(`${protocol}://${browserUrl}:${foundHttpPort}`);
        }
        if (argv.indexOf('--broadcast') >= 0) {
            log(isVerbose, 'publishing broadcast');
            discover_1.newSilentPublisher('devapp', 'stencil-dev', foundHttpPort);
        }
        function close() {
            return __awaiter(this, void 0, void 0, function* () {
                fileWatcher.close();
                tinyLrServer.close();
                yield new Promise((resolve, reject) => {
                    httpServer.close((err) => {
                        if (err) {
                            reject(err);
                        }
                        resolve();
                    });
                });
            });
        }
        process.once('SIGINT', () => __awaiter(this, void 0, void 0, function* () {
            yield close();
            process.exit(0);
        }));
        return {
            httpServer,
            fileWatcher,
            tinyLrServer,
            close
        };
    });
}
exports.run = run;
function createHttpRequestHandler(wwwDir, jsScriptsList, html5mode) {
    const jsScriptsMap = jsScriptsList.reduce((map, fileUrl) => {
        const urlParts = url.parse(fileUrl);
        if (urlParts.host) {
            map[fileUrl] = fileUrl;
        }
        else {
            const baseFileName = path.basename(fileUrl);
            map[path.join(RESERVED_STENCIL_PATH, 'js_includes', baseFileName)] = path.resolve(process.cwd(), fileUrl);
        }
        return map;
    }, {});
    const staticFileMiddleware = ecstatic({ root: wwwDir, cache: 0 });
    const devServerFileMiddleware = ecstatic({ root: path.resolve(__dirname, '..', 'assets') });
    const sendHtml = middlewares_1.serveHtml(wwwDir, Object.keys(jsScriptsMap));
    const sendDirectoryContents = middlewares_1.serveDirContents(wwwDir);
    return function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqPath = utils_1.getRequestedPath(req.url || '');
            const filePath = utils_1.getFileFromPath(wwwDir, req.url || '');
            let pathStat;
            const serveIndexFile = (directory) => __awaiter(this, void 0, void 0, function* () {
                const indexFilePath = path.join(directory, 'index.html');
                let indexFileStat;
                try {
                    indexFileStat = yield utils_1.fsStatPr(indexFilePath);
                }
                catch (err) { }
                if (indexFileStat && indexFileStat.isFile()) {
                    return sendHtml(indexFilePath, req, res);
                }
            });
            // If the file is a member of the scripts we autoload then serve it
            if (jsScriptsMap[(req.url || '')]) {
                return middlewares_1.sendFile('application/javascript', jsScriptsMap[(req.url || '')], req, res);
            }
            // If the request is to a static file that is part of this package
            // then just send it on using the static file middleware
            if ((req.url || '').startsWith(RESERVED_STENCIL_PATH)) {
                return devServerFileMiddleware(req, res);
            }
            try {
                pathStat = yield utils_1.fsStatPr(filePath);
            }
            catch (err) {
                // File or path does not exist
                if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
                    if (html5mode && (['.html', ''].indexOf(path.extname(filePath)) !== -1)) {
                        yield serveIndexFile(wwwDir);
                        if (res.finished) {
                            return;
                        }
                    }
                    // The wwwDir index.html file does not exist.
                    return middlewares_1.sendError(404, res, { error: err });
                }
                // No access to the file.
                if (err.code === 'EACCES') {
                    return middlewares_1.sendError(403, res, { error: err });
                }
                // Not sure what happened.
                return middlewares_1.sendError(500, res, { error: err });
            }
            // If this is the first request then try to serve an index.html file in the root dir
            if (reqPath === '/') {
                yield serveIndexFile(wwwDir);
                if (res.finished) {
                    return;
                }
            }
            // If the request is to a directory then serve the directory contents
            if (pathStat.isDirectory()) {
                yield serveIndexFile(filePath);
                if (res.finished) {
                    return;
                }
                // If the request is to a directory but does not end in slash then redirect to use a slash
                if (!reqPath.endsWith('/')) {
                    res.writeHead(302, {
                        'location': reqPath + '/'
                    });
                    return res.end();
                }
                return yield sendDirectoryContents(filePath, req, res);
            }
            // If the request is to a file and it is an html file then use sendHtml to parse and send on
            if (pathStat.isFile() && filePath.endsWith('.html')) {
                return yield sendHtml(filePath, req, res);
            }
            if (pathStat.isFile()) {
                return staticFileMiddleware(req, res);
            }
            // Not sure what you are requesting but lets just send an error
            return middlewares_1.sendError(415, res, { error: 'Resource requested cannot be served.' });
        });
    };
}
let timeoutId;
function createFileWatcher(wwwDir, watchGlob, changeCb, isVerbose) {
    const watcher = chokidar_1.watch(watchGlob, {
        cwd: wwwDir,
        ignored: /(^|[\/\\])\../ // Ignore dot files, ie .git
    });
    function fileChanged(filePath) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            log(isVerbose, `[${new Date().toTimeString().slice(0, 8)}] ${filePath} changed`);
            changeCb([filePath]);
        }, 50);
    }
    watcher.on('change', fileChanged);
    watcher.on('error', (err) => {
        log(true, err.toString());
    });
    return watcher;
}
function createLiveReload(port, address, wwwDir, ssl) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = ssl ? yield utils_1.getSSL() : {};
        const protocol = ssl ? 'https' : 'http';
        const liveReloadServer = tinylr(options);
        liveReloadServer.listen(port, address);
        return [
            liveReloadServer,
            `${protocol}://${getAddressForBrowser(address)}:${port}/livereload.js?snipver=1`,
            (changedFiles) => {
                liveReloadServer.changed({
                    body: {
                        files: changedFiles.map(changedFile => ('/' + path.relative(wwwDir, changedFile)))
                    }
                });
            }
        ];
    });
}
function getAddressForBrowser(ipAddress) {
    return (ipAddress === '0.0.0.0') ? 'localhost' : ipAddress;
}
function log(test, ...args) {
    if (test) {
        console.log(...args);
    }
}
