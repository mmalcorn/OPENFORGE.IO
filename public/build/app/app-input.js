/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppInput {
    constructor() {
        this.required = false;
    }
    inputHandler(event) {
        this.valueChange.emit({
            field: this.name,
            value: event.target.value,
        });
    }
    render() {
        return (h("div", { class: "form-group" },
            h("label", { htmlFor: this.name }, this.label),
            h("input", { class: "form-control", type: this.type, name: this.name, required: this.required, onInput: this.inputHandler.bind(this) })));
    }
    static get is() { return "app-input"; }
    static get properties() { return {
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get events() { return [{
            "name": "valueChange",
            "method": "valueChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

export { AppInput };
