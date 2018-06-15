/*! Built with http://stenciljs.com */
const { h } = window.App;

class ContentGraphic {
    render() {
        return (h("div", { class: {
                'content-graphic': true,
                row: true,
                'justify-content-around': true,
                'align-items-center': true,
                'flex-row-reverse': this.reverse,
            } },
            h("div", { class: "col-sm-12 col-md-4" },
                h("app-img", { class: "img-fluid", src: this.imgUrl, alt: "" })),
            h("div", { class: "content col-sm-12 col-md-7" },
                h("slot", { name: "header" }),
                h("slot", { name: "body" }))));
    }
    static get is() { return "content-graphic"; }
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
    static get style() { return ".content-graphic {\n  padding-top: 3rem;\n  padding-bottom: 3rem; }\n  \@media (max-width: 767.98px) {\n    .content-graphic {\n      text-align: center; } }\n  \@media (max-width: 767.98px) {\n    .content-graphic img {\n      margin-bottom: 30px;\n      max-width: 250px;\n      width: 50vw; } }\n  .content-graphic p {\n    margin: 0; }"; }
}

export { ContentGraphic };
