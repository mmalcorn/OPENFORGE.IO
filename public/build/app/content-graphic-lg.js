/*! Built with http://stenciljs.com */
const { h } = window.App;

class ContentGraphicLg {
    constructor() {
        this.reverse = false;
    }
    render() {
        return (h("div", { class: {
                'content-graphic-lg': true,
                row: true,
                'justify-content-center': true,
                'align-items-center': true,
                'flex-row-reverse': this.reverse,
            } },
            h("div", { class: {
                    'col-sm-12': true,
                    'col-md-5': true,
                    'px-lg-5': true,
                    'p-4': true,
                    'text-md-right': !this.reverse,
                } },
                h("app-img", { class: "img-fluid d-none d-md-inline", src: this.imgUrl, alt: "" })),
            h("div", { class: {
                    'col-sm-12': true,
                    'col-md-5': true,
                    'px-lg-5': true,
                    'text-md-right': this.reverse,
                } },
                h("slot", { name: "header" }),
                h("app-img", { class: "img-fluid d-xs-inline d-md-none", src: this.imgUrl, alt: "" }),
                h("slot", { name: "body" }))));
    }
    static get is() { return "content-graphic-lg"; }
    static get properties() { return {
        "imgUrl": {
            "type": String,
            "attr": "img-url"
        },
        "reverse": {
            "type": Boolean,
            "attr": "reverse"
        }
    }; }
    static get style() { return ".content-graphic-lg {\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n  \@media (max-width: 767.98px) {\n    .content-graphic-lg {\n      padding: 0;\n      text-align: center; } }\n  .content-graphic-lg img {\n    max-height: 400px; }\n    \@media (max-width: 767.98px) {\n      .content-graphic-lg img {\n        padding: 15px 30px 30px;\n        max-height: 200px; } }\n  .content-graphic-lg h3 {\n    color: #ff5d00;\n    font-size: 2.25rem;\n    font-weight: bold; }\n    \@media (max-width: 767.98px) {\n      .content-graphic-lg h3 {\n        font-size: 2rem;\n        line-height: 2.5rem;\n        margin-bottom: 15px; } }\n  .content-graphic-lg p {\n    margin: 0; }\n    \@media (max-width: 767.98px) {\n      .content-graphic-lg p {\n        font-size: 0.85rem;\n        margin-bottom: 30px; } }\n  .content-graphic-lg .content {\n    padding: 0 3rem; }\n    \@media (max-width: 767.98px) {\n      .content-graphic-lg .content {\n        padding: 0 15px; } }"; }
}

export { ContentGraphicLg };
