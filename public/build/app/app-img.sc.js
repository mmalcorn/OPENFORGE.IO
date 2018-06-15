/*! Built with http://stenciljs.com */
const { h } = window.App;

class Img {
    constructor() {
        this.io = null;
        this.fit = false;
    }
    srcChanged() {
        this.addIntersectionObserver();
    }
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if (!this.src) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIntersectionObserver();
            this.io = new IntersectionObserver(data => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.loadSrc = this.src;
                    this.removeIntersectionObserver();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => (this.loadSrc = this.src), 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return (h("img", { class: { fit: this.fit }, src: this.loadSrc, alt: this.alt, decoding: "async" }));
    }
    static get is() { return "app-img"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "alt": {
            "type": String,
            "attr": "alt"
        },
        "el": {
            "elementRef": true
        },
        "fit": {
            "type": Boolean,
            "attr": "fit"
        },
        "loadSrc": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src",
            "watchCallbacks": ["srcChanged"]
        }
    }; }
    static get style() { return "[data-app-img-host] {\n  display: block; }\n\nimg[data-app-img] {\n  max-width: 100%; }\n\nimg.fit[data-app-img] {\n  max-width: none;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: inherit;\n  object-fit: inherit;\n  -o-object-position: inherit;\n  object-position: inherit; }"; }
}

export { Img as AppImg };
