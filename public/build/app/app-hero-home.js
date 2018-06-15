/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHeroHome {
    componentDidLoad() {
        this.handleImage();
    }
    // will refactor in the future
    handleImage() {
        let element;
        let element2;
        try {
            element = document.querySelector('header.hero-home');
            element2 = document.querySelector('header.hero-home .content');
        }
        catch (e) {
            console.log('app-hero-home undefined', e);
        }
        if (window.innerWidth < 576) {
            // small
            element.style.backgroundImage = `url('assets/bg-hero-town-sm.jpg')`;
            element2.style.background = 'none';
        }
        else if (window.innerWidth < 992) {
            // medium
            element.style.backgroundImage = `url('assets/bg-hero-town-md.jpg')`;
            element2.style.background = 'none';
        }
        else {
            // large
            element.style.backgroundImage = `url('assets/bg-hero-town.jpg')`;
            element2.style.background = `url('assets/graphic-home-monitor.png') top center no-repeat`;
        }
    }
    render() {
        return (h("header", { class: "hero-home" },
            h("div", { class: "container" },
                h("div", { class: "content" },
                    h("h2", { class: {
                            'text-nowrap': this.textNoWrap,
                        } },
                        h("slot", { name: "header" })),
                    h("p", null,
                        h("slot", { name: "body" })),
                    h("a", { href: "#services", class: "btn btn-primary" },
                        h("slot", { name: "link" }))))));
    }
    static get is() { return "app-hero-home"; }
    static get properties() { return {
        "textNoWrap": {
            "type": Boolean,
            "attr": "text-no-wrap"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "handleImage",
            "passive": true
        }]; }
    static get style() { return ".hero-home {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  background-position: top center;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh; }\n  \@media (max-width: 991.98px) {\n    .hero-home {\n      display: block; } }\n  .hero-home h2 {\n    color: #fff;\n    font-size: 3rem;\n    margin-bottom: 1rem; }\n    \@media (max-width: 991.98px) {\n      .hero-home h2 {\n        font-size: 2.5rem; } }\n  .hero-home p {\n    color: #fff;\n    font-size: 1rem;\n    font-weight: 300;\n    margin-bottom: 1.5rem;\n    max-width: 500px; }\n  .hero-home .container {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    \@media (max-width: 991.98px) {\n      .hero-home .container {\n        display: block; } }\n  .hero-home .content {\n    background-size: contain;\n    height: 630px;\n    margin-left: -125px;\n    padding: 100px 130px;\n    position: relative;\n    width: 780px; }\n    \@media (max-width: 991.98px) {\n      .hero-home .content {\n        background: none;\n        height: auto;\n        margin-left: 0;\n        padding: 125px 0 0;\n        width: 100%; } }\n    \@media (max-width: 767.98px) {\n      .hero-home .content {\n        padding: 100px 0 0; } }"; }
}

class AppHome {
    constructor() {
        this.members = [
            {
                name: 'Jedi Weller',
                image: './../../assets/headshot-jedi.jpg',
                color: '#fa8928',
                title: 'Founder and Head of Technology',
                mail: 'jedi@openforge.io',
                twitter: 'https://twitter.com/jedihacks',
                github: 'https://github.com/jedihacks',
            },
            {
                name: 'Rachel Bennett',
                image: './../../assets/headshot-rachel.jpg',
                color: '#638593',
                title: 'Designer',
                mail: 'rachel@openforge.io',
                twitter: '',
                github: '',
            },
            {
                name: 'Geoffery Melle',
                image: './../../assets/headshot-geoff.jpg',
                color: '#d8aa0c',
                title: 'Account Manager',
                mail: 'geoff@openforge.io',
                twitter: '',
                github: '',
            },
            {
                name: 'Joni Leho',
                image: './../../assets/headshot-joni.jpg',
                color: '#fa8928',
                title: 'Software Engineer',
                mail: 'joni@openforge.io',
                twitter: 'https://twitter.com/lehto_joni',
            },
            {
                name: 'Auvo Severinkangas',
                image: './../../assets/headshot-auvo.jpg',
                color: '#638593',
                title: 'Software Engineer',
                mail: 'auvo@openforge.io',
                twitter: '',
                github: '',
            },
            {
                name: 'Elizabeth Cottrell',
                image: './../../assets/headshot-eliza.jpg',
                color: '#d8aa0c',
                title: 'Front End Developer',
                mail: 'elizabeth@openforge.io',
                twitter: 'https://twitter.com/_elizacottrell',
                github: 'https://github.com/LizCottrell',
            },
            {
                name: 'Paulina Gallo',
                image: './../../assets/headshot-paulina.jpg',
                color: '#fa8928',
                title: 'Software Engineer',
                mail: 'paulina@openforge.io',
                twitter: 'https://twitter.com/paulpaultweets',
                github: 'https://github.com/paulpauldevelops',
            },
            {
                name: 'Mohammad Alfatih',
                image: './../../assets/headshot-mohammad.jpg',
                color: '#638593',
                title: 'Software Engineer',
                mail: 'mo@jawami.com',
                twitter: 'https://twitter.com/webdevffw',
                github: 'https://github.com/Mohammad-alfatih',
            },
            {
                name: 'Meredith Alcorn',
                image: './../../assets/headshot-meredith.jpg',
                color: '#d8aa0c',
                title: 'Software Engineer',
                mail: 'meredith@openforge.io',
                github: 'https://github.com/mmalcorn',
            },
            {
                name: 'Fernando Del Olmo',
                image: './../../assets/headshot-fernando.jpg',
                color: '#fa8928',
                title: 'Software Engineer',
                mail: 'fernando@openforge.io',
                twitter: 'https://twitter.com/fdom92',
                github: 'https://github.com/Fdom92',
            },
            {
                name: 'William Holloran',
                image: './../../assets/headshot-billy.jpg',
                color: '#638593',
                title: 'Project Manager / QA Engineer',
                mail: 'william@openforge.io',
            },
            {
                name: 'Luis Chacon',
                image: './../../assets/headshot-luis.jpg',
                color: '#d8aa0c',
                title: 'Software Engineer',
                mail: 'luis@openforge.io',
                github: 'https://github.com/luiskcs89',
            },
            {
                name: 'Claudio Del Valle',
                image: './../../assets/headshot-claudio.jpg',
                color: '#fa8928',
                title: 'Software Engineer',
                mail: 'claudio@openforge.io',
                github: 'https://github.com/daftclaud',
            },
            {
                name: 'Yanying Zhu',
                image: './../../assets/headshot-yanying.jpg',
                color: '#638593',
                title: 'Designer',
                mail: 'yanying@openforge.io',
                twitter: '',
                github: '',
            },
        ];
    }
    componentDidLoad() {
        let hrefArray;
        try {
            hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
            hrefArray.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const element = document.querySelector(this.getAttribute('href'));
                    element &&
                        element.scrollIntoView({
                            block: 'start',
                            behavior: 'smooth',
                        });
                });
            });
        }
        catch (e) {
            console.error('caught error componentDidLoad app-home', e);
        }
    }
    render() {
        return (h("div", null,
            h("app-hero-home", null,
                h("span", { slot: "header" }, "We are Thinkers. Makers. Doers."),
                h("span", { slot: "body" }, "Work with our team of highly skilled designers, developers, and consultants to develop solutions and processes that fit your business requirements."),
                h("span", { slot: "link" }, "Let's Get Started")),
            h("section", { id: "services" },
                h("div", { class: "container services" },
                    h("h2", null, "What do we provide?"),
                    h("p", null, "Whether you are a start up, an enterprise, or somewhere in between, we will work with you every step of the way. Choose your path below to learm more about our custom services."),
                    h("nav", { class: "nav", role: "navigation" },
                        h("div", { class: "nav nav-tabs nav-fill", id: "nav-tab" },
                            h("a", { class: "nav-item nav-link active", id: "nav-startup-tab", "data-toggle": "tab", href: "#nav-startup", role: "tab", "aria-controls": "nav-startup", "aria-selected": "true" },
                                h("img", { class: "img-fluid", src: "assets/graphic-services-startup.png", alt: "" }),
                                h("div", null,
                                    "Start Up ",
                                    h("i", { class: "fa fa-plus", "aria-hidden": "true" }))),
                            h("a", { class: "nav-item nav-link", id: "nav-smallteam-tab", "data-toggle": "tab", href: "#nav-smallteam", role: "tab", "aria-controls": "nav-smallteam", "aria-selected": "false" },
                                h("img", { class: "img-fluid", src: "assets/graphic-services-small.png", alt: "" }),
                                h("div", null,
                                    "Small Team ",
                                    h("i", { class: "fa fa-plus", "aria-hidden": "true" }))),
                            h("a", { class: "nav-item nav-link", id: "nav-midteam-tab", "data-toggle": "tab", href: "#nav-midteam", role: "tab", "aria-controls": "nav-midteam", "aria-selected": "false" },
                                h("img", { class: "img-fluid", src: "assets/graphic-services-midsize.png", alt: "" }),
                                h("div", null,
                                    "Mid-Size Team ",
                                    h("i", { class: "fa fa-plus", "aria-hidden": "true" }))),
                            h("a", { class: "nav-item nav-link", id: "nav-enterprise-tab", "data-toggle": "tab", href: "#nav-enterprise", role: "tab", "aria-controls": "nav-enterprise", "aria-selected": "false" },
                                h("img", { class: "img-fluid", src: "assets/graphic-services-enterprise.png", alt: "" }),
                                h("div", null,
                                    "Enterprise ",
                                    h("i", { class: "fa fa-plus", "aria-hidden": "true" }))))),
                    h("div", { class: "tab-content", id: "nav-tabContent" },
                        h("div", { class: "tab-pane fade show active", id: "nav-startup", role: "tabpanel", "aria-labelledby": "nav-startup-tab" },
                            h("div", { class: "services-content" },
                                h("div", { class: "row justify-content-center" },
                                    h("div", { class: "col-md-6" },
                                        h("h3", null, " What you need: "),
                                        "Bring your idea to life with our team of experts in Design, UI/UX, Web, and Mobile Application Development. We don't just 'build it', we sit with you to answer the question of how the technology and psychology behind the design will match your business model. Our experience with 100+ Startups becomes your experience as we take you through the next level of Startup Consulting."),
                                    h("div", { class: "col-md-4" },
                                        h("h3", null, "What we provide:"),
                                        h("ul", null,
                                            h("li", null, "Startup Consulting"),
                                            h("li", null, "Enhanced Mobile & Web Designs"),
                                            h("li", null, "UI/UX Audits & Recommendations "),
                                            h("li", null, "Mobile Application Development"),
                                            h("li", null, "Web Application Development"),
                                            h("li", null, "Customer Engagement Consulting"),
                                            h("li", null, "Guerilla Marketing Strategy")))))),
                        h("div", { class: "tab-pane fade", id: "nav-smallteam", role: "tabpanel", "aria-labelledby": "nav-smallteam-tab" },
                            h("div", { class: "services-content" },
                                h("div", { class: "row justify-content-center" },
                                    h("div", { class: "col-md-6" },
                                        h("h3", null, " What you need: "),
                                        "You have a small team and successful company, you've proven your business model and have enough revenue to sustain; however, you are struggling with accelerating growth and would like to utilize technology to skyrocket your business. You're nervous (and rightly so!), because you've never built a technology product before. Fear not! We are here to help. Let us guide you on ins-and-outs of Product Development and help you determine",
                                        ' ',
                                        h("b", null, "HOW and IF"),
                                        " you should be building an app. Sometimes, it's much better to use an existing service!"),
                                    h("div", { class: "col-md-4" },
                                        h("h3", null, "What we provide:"),
                                        h("ul", null,
                                            h("li", null, "Business Consulting"),
                                            h("li", null, "Technical Consulting"),
                                            h("li", null, "Business Elligibility Audit"),
                                            h("li", null, "Mobile & Web Designs"),
                                            h("li", null, "UI/UX Audits "),
                                            h("li", null, "Mobile & Web Application Development"),
                                            h("li", null, "Customer Engagement Strategy")))))),
                        h("div", { class: "tab-pane fade", id: "nav-midteam", role: "tabpanel", "aria-labelledby": "nav-midteam-tab" },
                            h("div", { class: "services-content" },
                                h("div", { class: "row justify-content-center" },
                                    h("div", { class: "col-md-6" },
                                        h("h3", null, " What you need: "),
                                        "You have an established business and risks cost money. You're looking for a team you can trust to get the job done right the first time. That's us. We work with your team to evaluate your business goals, develop a plan of attack, and execute in order to deliver your results on budget, but mostly importantly, on time. We can provide support to your existing infrastructure, provide CTO services to guide your existing teams, or build your product start-finish without unneccessary supervision. Whatever you need, we're here."),
                                    h("div", { class: "col-md-4" },
                                        h("h3", null, "What we provide:"),
                                        h("ul", null,
                                            h("li", null, "Business Strategy & Consulting"),
                                            h("li", null, "Professional Mobile & Web Designs"),
                                            h("li", null, "UI/UX Audits & Recommendations "),
                                            h("li", null, "Mobile Application Development"),
                                            h("li", null, "Web Application Development"),
                                            h("li", null, "Strategic Customer Engagement Consulting"),
                                            h("li", null, "Team Trainings & Workshops"),
                                            h("li", null, "Process Improvement Training")))))),
                        h("div", { class: "tab-pane fade", id: "nav-enterprise", role: "tabpanel", "aria-labelledby": "nav-enterprise-tab" },
                            h("div", { class: "services-content" },
                                h("div", { class: "row justify-content-center" },
                                    h("div", { class: "col-md-6" },
                                        h("h3", null, " What you need: "),
                                        "Our Enterprise clients have world-wide goals; but often need the agility and flexibility of a small team in order to accomplish those goals and bypass the corporate red-tape. For these clients, we offer tailored solutions to fit your needs. If you have an existing team of Designers and Developers, but they have difficulty communicating and often miss deadlines and go over budget; we provide training and workshops to increase cross-disciplinary communication. For products that have spiraled out of control; we come in and fix the physical (design & dev), but also the systematic problems such as team communication and design to development process improvement."),
                                    h("div", { class: "col-md-4" },
                                        h("h3", null, "What we provide:"),
                                        h("ul", null,
                                            h("li", null, "Enterprise Design Workshops"),
                                            h("li", null, "Cross-Disciplinary Team Training"),
                                            h("li", null, "External Consulting & Process Improvement"),
                                            h("li", null, "User Experience (UI/UX) Audits"),
                                            h("li", null, "Web Accessability Audits"),
                                            h("li", null, "Mobile & Web Application Services"),
                                            h("li", null, "Customer Engagement Strategy"))))))))),
            h("app-cta", { "link-url": "#about", id: "cta-about" },
                h("span", { slot: "header" }, "Want to learn more about us?"),
                h("span", { slot: "link" }, "Get to know us")),
            h("section", { id: "process", class: "bg-gray" },
                h("div", { class: "container process" },
                    h("h2", null, "Our Process"),
                    h("content-graphic-lg", { "img-url": "assets/graphic-home-discovery.png" },
                        h("h3", { slot: "header" }, "Discovery"),
                        h("p", { slot: "body" }, "We'll help you evaluate your business needs and challenge your assumptions before entering into the Design and Development processs. Make sure that the technology you're building makes sense for your business.")),
                    h("content-graphic-lg", { "img-url": "assets/graphic-home-consulting.png" },
                        h("h3", { slot: "header" }, "Design & User Experience"),
                        h("p", { slot: "body" }, "There is psychology and through behind every effective design. Our team of experts sits with you and matches our knowledge of Design & User Experience principles with your subject-matter knowledge to jointly create the most effective representation of your business.")),
                    h("content-graphic-lg", { "img-url": "assets/graphic-home-development.png" },
                        h("h3", { slot: "header" }, "Development"),
                        h("p", { slot: "body" }, "Throw away the development practices of the 1990's and 2000's. In order to utilize modern technologies we must use modern approaches to software development, including Design & Dev integration, Continuous Integration strategies, and sophisticated Automated Testing strategies to assure your business is always operational.")),
                    h("content-graphic-lg", { "img-url": "assets/graphic-home-deployment.png" },
                        h("h3", { slot: "header" }, "Deployment"),
                        h("p", { slot: "body" }, "Do you have a dashboard to monitor the state of your application? Do you have Continuous Integration and Automated Testing strategies to decrease your development and QA testing costs? Does releasing an update take more than 1 (one) day? If so, let us help you improve your deployment strategy so you can get to market quicker, on time, and on budget.")),
                    h("content-graphic-lg", { "img-url": "assets/graphic-home-feedback.png" },
                        h("h3", { slot: "header" }, "User Feedback"),
                        h("p", { slot: "body" }, "The biggest mistake businesses make is to launch a product and then stop there. That initial data from the first 3 months is crucial for engaging your consumer and enhancing your experience. Expand your business by capturing this crucial moment; we will help you monitor and improve the entire way.")))),
            h("section", { class: "bg-black", id: "perspectives" },
                h("div", { class: "container perspectives" },
                    h("img", { class: "img-fluid", src: "assets/graphic-home-icons.png", alt: "" }),
                    h("h2", null, "We Are Powered by Multiple Perspectives"),
                    h("p", null, "Our individual skills, backgrounds, and life experiences have shaped us into the company that we are today. Maintaining a diverse team helps us to perform better, attract top talent, and make smarter decisions."))),
            h("section", { id: "about", class: "bg-gray" },
                h("div", { class: "container about" },
                    h("h2", null, "Meet the Team"),
                    h("p", null, "There's no doubt that our team is made up of brilliant and talented individuals who are passionate about technology and design thinking. Together we design, code, grow, and evolve."),
                    h("app-members", { members: this.members }))),
            h("section", null,
                h("div", { class: "container partners" },
                    h("h2", null, "Our Industry Partners"),
                    h("p", null, "Here are some of our trusted partners. We frequently work with these companies to ensure the highest quality to our products and to use the program that best fits your app's needs."),
                    h("div", { class: "partners--logos" },
                        h("img", { class: "img-fluid", src: "assets/logo-ionic-black.png", alt: "Ionic" }),
                        h("img", { class: "img-fluid", src: "assets/logo-angular-black.png", alt: "Angular" }),
                        h("img", { class: "img-fluid", src: "assets/logo-capacitor-black.png", alt: "Capacitor" }),
                        h("img", { class: "img-fluid", src: "assets/logo-stencil-black.png", alt: "Stencil" }),
                        h("img", { class: "img-fluid", src: "assets/logo-mysql-black.png", alt: "Mysql" }),
                        h("img", { class: "img-fluid", src: "assets/logo-mongodb-black.png", alt: "MongoDB" }),
                        h("img", { class: "img-fluid", src: "assets/logo-nodejs-black.png", alt: "Node JS" }),
                        h("img", { class: "img-fluid", src: "assets/logo-aws-black.png", alt: "AWS" })))),
            h("app-cta", { "link-url": "/contact" },
                h("span", { slot: "header" }, "Ready to work with us?"),
                h("span", { slot: "link" }, "Get in touch"))));
    }
    static get is() { return "app-home"; }
    static get style() { return "section {\n  padding: 6rem 0; }\n  \@media (max-width: 767.98px) {\n    section {\n      padding: 5rem 0;\n      text-align: center; } }\n  section.bg-gray {\n    background: #f4f5f9; }\n  section.bg-black {\n    background: #171719; }\n  section h2 {\n    margin-bottom: 3rem;\n    text-align: center; }\n    \@media (max-width: 767.98px) {\n      section h2 {\n        margin-bottom: 1rem; } }\n  section .header-text {\n    font-size: 4rem;\n    text-align: center; }\n    \@media (max-width: 767.98px) {\n      section .header-text {\n        margin-bottom: 1rem; } }\n\n#services {\n  padding-bottom: 0; }\n  \@media (max-width: 1399.98px) {\n    #services {\n      display: none; } }\n\n.services p {\n  text-align: center; }\n\n.services figure {\n  border: 3px solid #e88212;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  padding: 10px; }\n  .services figure:hover figcaption, .services figure:focus figcaption, .services figure:active figcaption {\n    color: #b9670e; }\n  .services figure img {\n    max-width: 300px;\n    padding: 0 15px;\n    width: 100%;\n    margin-bottom: 1rem; }\n  .services figure figcaption {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 700;\n    letter-spacing: 0.1rem;\n    text-transform: uppercase;\n    text-align: center; }\n\n.services nav {\n  background: white; }\n\n.services .nav-tabs {\n  font-weight: bold;\n  width: 100%; }\n  .services .nav-tabs .nav-link {\n    border-bottom: 5px solid #9fa3a7; }\n  .services .nav-tabs .nav-link.active {\n    background-color: #f4f5f9;\n    border: 5px solid #9fa3a7;\n    border-bottom: transparent;\n    color: #e88212; }\n    .services .nav-tabs .nav-link.active .fa-plus {\n      display: none; }\n\n.services .nav-item {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .services .nav-item img {\n    max-width: 200px;\n    width: 100%; }\n\n.services .services-content {\n  background: #f4f5f9;\n  border-bottom: 5px solid #9fa3a7;\n  border-left: 5px solid #9fa3a7;\n  border-right: 5px solid #9fa3a7;\n  padding: 5rem;\n  overflow: hidden; }\n  \@media (max-width: 767.98px) {\n    .services .services-content {\n      display: block; } }\n\n\@media (max-width: 1399.98px) {\n  .services {\n    display: none; } }\n\n#cta-about {\n  padding-top: 0;\n  padding-bottom: 0; }\n  \@media (max-width: 1399.98px) {\n    #cta-about {\n      display: none; } }\n\n.process h2 {\n  margin-bottom: 50px; }\n\n.process .content-graphic-lg {\n  padding: 0; }\n  .process .content-graphic-lg img {\n    max-width: 300px; }\n\n.perspectives {\n  text-align: center; }\n  .perspectives img {\n    margin-bottom: 3rem;\n    max-width: 900px;\n    width: 100%; }\n  .perspectives h2 {\n    color: white;\n    margin-bottom: 2rem; }\n  .perspectives p {\n    color: white;\n    margin: 0 auto;\n    max-width: 1000px; }\n\n.about p {\n  margin: 0 auto 3rem;\n  max-width: 1000px;\n  text-align: center; }\n\n.partners {\n  text-align: center; }\n  .partners p {\n    margin: 0 auto 3rem;\n    max-width: 800px; }\n  .partners--logos {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin: 0 auto 2rem;\n    max-width: 1000px; }\n    .partners--logos img {\n      -ms-flex-negative: 4;\n      flex-shrink: 4;\n      height: 100%;\n      max-width: 25%;\n      min-height: 0;\n      padding: 5px;\n      width: 100%; }\n      \@media (max-width: 767.98px) {\n        .partners--logos img {\n          max-width: 50%;\n          padding: 20px 5px; } }\n      \@media (max-width: 575.98px) {\n        .partners--logos img {\n          max-width: 100%;\n          padding: 20px; } }"; }
}

class AppMembers {
    render() {
        return (h("div", { class: "row" }, this.members.map(member => (h("div", { class: "col-sm-12 col-md-4 mb-4" },
            h("div", { class: "pt-4", style: { border: `${member.color} 2px solid` } },
                h("app-img", { class: "card-img-top mt-2 px-4", src: member.image, alt: member.name, style: { borderRadius: '80%' } }),
                h("div", { class: "card-body text-center" },
                    h("small", { class: "card-title mb-auto font-weight-bold", style: { color: member.color } }, member.title),
                    h("h4", { class: "card-text mb-auto" }, member.name)),
                h("div", { class: "col text-center", style: { fontSize: '2em' } },
                    !member.mail ? null : (h("a", { href: `mailto:${member.mail}`, title: `${member.name} mail account`, target: "_blank", rel: "noopener", style: { color: member.color } },
                        h("i", { class: "fa fa-envelope-square pr-3", "aria-hidden": "true" }))),
                    !member.twitter ? null : (h("a", { href: member.twitter, title: `${member.name} twitter account`, target: "_blank", rel: "noopener", style: { color: member.color } },
                        h("i", { class: "fab fa-twitter-square pr-3", "aria-hidden": "true", "link-url": member.twitter }))),
                    !member.github ? null : (h("a", { href: member.github, title: `${member.name} github account`, target: "_blank", rel: "noopener", style: { color: member.color } },
                        h("i", { class: "fab fa-github-square pr-3", "aria-hidden": "true" }))))))))));
    }
    static get is() { return "app-members"; }
    static get properties() { return {
        "members": {
            "type": "Any",
            "attr": "members"
        }
    }; }
    static get style() { return ".fa-envelope-square:before {\n  content: '\\f199'; }\n\n.fab-fa-twitter-square:before {\n  content: '\\f081'; }\n\n.fab-fa-github-square:before {\n  content: '\\f092'; }"; }
}

export { AppHeroHome, AppHome, AppMembers };
