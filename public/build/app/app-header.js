/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHeader {
    constructor() {
        this.hideButton = false;
        this.scrollIntoView = () => {
            this.scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    }
    componentDidLoad() {
        if (this.hideButton) {
            const button = document.getElementsByClassName('btn btn-primary btn-arrow');
            button['0'].style.visibility = 'hidden';
        }
        try {
            this.scrollElement = document.querySelector(this.linkUrl);
        }
        catch (e) {
            console.log('app-header error ', e);
        }
    }
    render() {
        return (h("header", { class: "header d-flex flex-column justify-content-center", style: { backgroundImage: `url('${this.backgroundUrl}')` } },
            h("slot", { name: "header" }),
            h("slot", { name: "subheader" }),
            this.hideButton ? null : (h("a", { class: "btn btn-primary btn-arrow", onClick: this.scrollIntoView },
                h("i", { class: "fa fa-arrow-down", "aria-hidden": "true" }),
                h("span", { class: "sr-only" }, "Scroll to content")))));
    }
    static get is() { return "app-header"; }
    static get properties() { return {
        "backgroundUrl": {
            "type": String,
            "attr": "background-url"
        },
        "hideButton": {
            "type": Boolean,
            "attr": "hide-button"
        },
        "linkUrl": {
            "type": String,
            "attr": "link-url"
        }
    }; }
    static get style() { return "header.header {\n  background-color: #171719;\n  background-position: top center;\n  background-size: cover;\n  padding: 10rem 1rem;\n  position: relative;\n  text-align: center; }\n  \@media (max-width: 767.98px) {\n    header.header {\n      padding: 5rem 1rem; } }\n  \@media (max-width: 575.98px) {\n    header.header {\n      height: calc(100vh - 120px); } }\n  header.header h2 {\n    color: #fff;\n    font-size: 4rem; }\n    \@media (max-width: 1399.98px) {\n      header.header h2 {\n        font-size: 3rem; } }\n    \@media (max-width: 767.98px) {\n      header.header h2 {\n        font-size: 2.2rem; } }\n  header.header p {\n    color: #fff;\n    font-size: 1.5rem;\n    font-weight: 300;\n    margin: 0; }\n    \@media (max-width: 767.98px) {\n      header.header p {\n        font-size: 1rem; } }\n  header.header .btn-arrow {\n    bottom: -23px;\n    left: calc(50% - 23px);\n    padding: 0.375rem 1rem;\n    position: absolute; }\n    header.header .btn-arrow i,\n    header.header .btn-arrow span {\n      color: #fff; }"; }
}

export { AppHeader };
