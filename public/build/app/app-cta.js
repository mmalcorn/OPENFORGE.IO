/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppCta {
    constructor() {
        this.hideButton = false;
    }
    render() {
        return (h("aside", { class: "cta px-2 text-center text-white" },
            h("div", { class: "d-sm-inline-flex d-md-flex flex-sm-column flex-md-row justify-content-center" },
                h("h3", { class: "mr-sm-0 mr-md-5" },
                    h("slot", { name: "header" })),
                this.hideButton ? null : (h("stencil-route-link", { url: this.linkUrl },
                    h("button", { class: "cta-link btn btn-primary" },
                        h("slot", { name: "link" })))))));
    }
    static get is() { return "app-cta"; }
    static get properties() { return {
        "hideButton": {
            "type": Boolean,
            "attr": "hide-button"
        },
        "linkUrl": {
            "type": String,
            "attr": "link-url"
        }
    }; }
    static get style() { return ".cta {\n  background: #e88212;\n  background: linear-gradient(-160deg, #f99a2a 0%, #f9902a 100%);\n  padding: 5rem 0; }\n  .cta h3 {\n    font-size: 2rem; }\n    \@media (max-width: 767.98px) {\n      .cta h3 {\n        font-size: 1.75rem;\n        margin: 0 auto 2rem; } }"; }
}

export { AppCta };
