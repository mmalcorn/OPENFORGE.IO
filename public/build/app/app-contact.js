/*! Built with http://stenciljs.com */
const { h } = window.App;

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AppContact {
    constructor() {
        this.formSubmitted = false;
        this.formSubmitting = false;
    }
    componentDidLoad() {
        this.resetFormValues();
        let element;
        element = document.querySelector('.contact .hero');
        element.style.backgroundImage = `url('assets/bg-hero-handshake-desk.jpg')`;
    }
    valueChangeHandler(event) {
        console.log('valueChangeHandler');
        const { field, value } = event.detail;
        this.formValues[field] = value;
    }
    handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            try {
                this.formSubmitting = true;
                yield fetch('https://5fq97p31pc.execute-api.us-east-1.amazonaws.com/prod/openforgeContactUs', {
                    method: 'post',
                    mode: 'no-cors',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    },
                    body: JSON.stringify(this.formValues),
                });
                e.target.reset();
                this.resetFormValues();
                this.formSubmitting = false;
                this.formSubmitted = true;
            }
            catch (error) {
                console.log('Error', error);
            }
        });
    }
    renderRadioColumns(name, choices) {
        const columns = [];
        let columnItems = [];
        choices.forEach(choice => {
            const item = (h("app-radio", { name: name, value: choice, label: choice, required: true }));
            columnItems.push(item);
            if (columnItems.length >= 4) {
                const column = h("div", { class: "col-sm-6" }, columnItems);
                columns.push(column);
                columnItems = [];
            }
        });
        const column = h("div", { class: "col-sm-6" }, columnItems);
        columns.push(column);
        return columns;
    }
    scrollToForm() {
        const form = document.getElementById('second-content');
        form.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    render() {
        return (h("div", { class: "contact" },
            h("header", { class: "hero" },
                h("div", { class: "container" },
                    h("div", { class: "row align-items-center" },
                        h("div", { class: "col-sm-12 col-md-8 col-lg-6" },
                            h("h2", { class: "text-nowrap" }, "Let's Work Together"),
                            h("p", null, "Request a Discovery Session Today!"),
                            h("a", { onClick: this.scrollToForm.bind(this), class: "btn btn-primary" }, "Request Now"))))),
            h("section", { id: "second-content", class: "contact-form" },
                h("div", { class: "container" },
                    h("div", { class: "jumbotron" },
                        h("h2", { class: "display-5 font-weight-bold" }, "Get in Touch"),
                        h("p", { class: "lead" }, "Tell us a little bit about what you're working on. We'll be in touch to tell you about the next steps toward accomplishing your goals!"),
                        h("form", { onSubmit: this.handleSubmit.bind(this) },
                            h("app-input", { name: "name", label: "Full Name", type: "text", required: true }),
                            h("app-input", { name: "company", label: "Company", type: "text", required: true }),
                            h("app-input", { name: "email", label: "E-mail", type: "email", required: true }),
                            h("app-input", { name: "phone", label: "Phone", type: "tel", required: true }),
                            h("app-input", { name: "message", label: "How did you hear about OpenForge?", type: "text", required: true }),
                            h("fieldset", null,
                                h("legend", { class: "lead" }, "How can we help you?"),
                                h("div", { class: "row ml-2" }, this.renderRadioColumns('desiredService', radioChoices.desiredService))),
                            h("fieldset", null,
                                h("legend", { class: "lead" }, "Do you have a budget?"),
                                h("div", { class: "row ml-2" }, this.renderRadioColumns('budget', radioChoices.budget))),
                            h("button", { name: "submit", type: "submit", class: "btn btn-primary", disabled: this.formSubmitting }, "Send"))),
                    !this.formSubmitted ? null : (h("div", { class: "alert alert-success", role: "alert" }, "Thank you for reaching out! we'll get back to you within 24 hours!"))))));
    }
    resetFormValues() {
        this.formValues = {
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            desiredService: '',
            budget: '',
        };
    }
    static get is() { return "app-contact"; }
    static get properties() { return {
        "formSubmitted": {
            "state": true
        },
        "formSubmitting": {
            "state": true
        },
        "formValues": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "check",
            "method": "valueChangeHandler"
        }, {
            "name": "valueChange",
            "method": "valueChangeHandler"
        }]; }
    static get style() { return ".contact .hero {\n  background-position: top center;\n  background-size: cover;\n  height: 100vh; }\n  .contact .hero .container,\n  .contact .hero .row {\n    height: 100%; }\n  .contact .hero h2 {\n    color: #fff;\n    font-size: 4rem;\n    margin-bottom: 1rem; }\n    \@media (max-width: 1399.98px) {\n      .contact .hero h2 {\n        font-size: 3rem; } }\n    \@media (max-width: 767.98px) {\n      .contact .hero h2 {\n        font-size: 2.2rem; } }\n  .contact .hero p {\n    color: #fff;\n    font-size: 1.2rem;\n    font-weight: 300;\n    margin-bottom: 3rem;\n    max-width: 500px; }\n    \@media (max-width: 1399.98px) {\n      .contact .hero p {\n        font-size: 1rem; } }\n\n.contact .contact-form {\n  padding: 7rem 0; }\n  \@media (max-width: 767.98px) {\n    .contact .contact-form {\n      padding: 3rem 0; } }"; }
}
const radioChoices = {
    desiredService: [
        'App Development',
        'Web Development',
        'UI/UX Design',
        'Graphic Design',
        'Consulting',
        'CTO as a service',
        'Unsure',
    ],
    budget: [
        '5K-10K',
        '10K-25K',
        '25K-50K',
        '50K-75K',
        '75K-100K',
        '100K-200K',
        '200K',
        'Unsure',
    ],
};

let id = 1;
class AppRadio {
    constructor() {
        this.required = false;
        this.inputId = '';
    }
    changeHandler(event) {
        if (event.target.checked) {
            this.valueChange.emit({
                field: this.name,
                value: event.target.value,
            });
        }
    }
    render() {
        if (!this.inputId) {
            this.inputId = `${this.name}${id}`;
            id += 1;
        }
        return (h("div", { class: "form-check" },
            h("input", { id: this.inputId, class: "form-check-input", type: "radio", name: this.name, value: this.value, required: this.required, onChange: this.changeHandler.bind(this) }),
            h("label", { class: "form-check-label", htmlFor: this.inputId }, this.label)));
    }
    static get is() { return "app-radio"; }
    static get properties() { return {
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "value": {
            "type": String,
            "attr": "value"
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

export { AppContact, AppRadio };
