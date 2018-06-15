/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppServices {
    render() {
        return (h("div", null,
            h("app-hero", { "link-url": "mailto:hello@openforge.io", "background-url": "assets/bg-hero-wireframes-pencils.jpg" },
                h("span", { slot: "header" }, "Creative Digital Solutions for Real World Problems"),
                h("span", { slot: "body" }, "We use Google standards, Test Driven Development, and Code Cleanliness (linting) a in all our development contributions. We believe in using only the best practices for your unique application."),
                h("span", { slot: "link" }, "Learn More")),
            h("app-cta", { "link-url": "mailto:hello@openforge.io" },
                h("span", { slot: "header" }, "Let's work together!"),
                h("span", { slot: "link" }, "Get in touch"))));
    }
    static get is() { return "app-services"; }
    static get style() { return ""; }
}

export { AppServices };
