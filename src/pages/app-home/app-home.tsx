import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  members = [
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

  componentDidLoad() {
    let hrefArray;
    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        });
      });
    } catch (e) {
      console.error('caught error componentDidLoad app-home', e);
    }
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero-home>
          <span slot="header">
            <app-translate key="home.hero.header" />
          </span>
          <span slot="body">
            <app-translate key="home.hero.body" />
          </span>
          <span slot="link">
            <app-translate key="home.hero.link" />
          </span>
        </app-hero-home>

        {/* section - services */}
        <section id="services">
          <div class="container services">
            <h2>
              <app-translate key="home.services.what.title" />
            </h2>
            <p>
              <app-translate key="home.services.what.text" />
              {/* Technology is constantly changing; Let us help you change with it. */}
            </p>
            <nav class="nav" role="navigation">
              <div class="nav nav-tabs nav-fill" id="nav-tab">
                <a
                  class="nav-item nav-link active"
                  id="nav-startup-tab"
                  data-toggle="tab"
                  href="#nav-startup"
                  role="tab"
                  aria-controls="nav-startup"
                  aria-selected="true"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-startup.png"
                    alt=""
                  />
                  <div>
                    <app-translate key="home.services.what.startup" />{' '}
                    <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-smallteam-tab"
                  data-toggle="tab"
                  href="#nav-smallteam"
                  role="tab"
                  aria-controls="nav-smallteam"
                  aria-selected="false"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-small.png"
                    alt=""
                  />
                  <div>
                    <app-translate key="home.services.what.smallTeam" />{' '}
                    <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-midteam-tab"
                  data-toggle="tab"
                  href="#nav-midteam"
                  role="tab"
                  aria-controls="nav-midteam"
                  aria-selected="false"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-midsize.png"
                    alt=""
                  />
                  <div>
                    <app-translate key="home.services.what.midSizeTeam" />{' '}
                    <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-enterprise-tab"
                  data-toggle="tab"
                  href="#nav-enterprise"
                  role="tab"
                  aria-controls="nav-enterprise"
                  aria-selected="false"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-enterprise.png"
                    alt=""
                  />
                  <div>
                    <app-translate key="home.services.what.enterprise" />{' '}
                    <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-startup"
                role="tabpanel"
                aria-labelledby="nav-startup-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3>
                        <app-translate key="home.services.what.whatYouNeed" />
                      </h3>
                      <app-translate key="home.services.what.whatYouNeedText" />
                    </div>

                    <div class="col-md-4">
                      <h3>
                        <app-translate key="home.services.what.whatWeProvide.title" />
                      </h3>
                      <ul>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.startUpConsulting" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.enhancedDesigns" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.uiRecommendations" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.mobileDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.webDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.engagementStrategy" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.guearillaMarketingStrategy" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-smallteam"
                role="tabpanel"
                aria-labelledby="nav-smallteam-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3>
                        <app-translate key="home.services.what.whatYouNeed" />
                      </h3>
                      <app-translate key="home.services.what.whatYouNeedText" />
                    </div>

                    <div class="col-md-4">
                      <h3>
                        <app-translate key="home.services.what.whatWeProvide.title" />
                      </h3>
                      <ul>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.startUpConsulting" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.enhancedDesigns" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.uiRecommendations" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.mobileDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.webDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.engagementStrategy" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.guearillaMarketingStrategy" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-midteam"
                role="tabpanel"
                aria-labelledby="nav-midteam-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3>
                        <app-translate key="home.services.what.whatYouNeed" />
                      </h3>
                      <app-translate key="home.services.what.whatYouNeedText" />
                    </div>

                    <div class="col-md-4">
                      <h3>
                        <app-translate key="home.services.what.whatWeProvide.title" />
                      </h3>
                      <ul>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.startUpConsulting" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.enhancedDesigns" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.uiRecommendations" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.mobileDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.webDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.engagementStrategy" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.guearillaMarketingStrategy" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-enterprise"
                role="tabpanel"
                aria-labelledby="nav-enterprise-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3>
                        <app-translate key="home.services.what.whatYouNeed" />
                      </h3>
                      <app-translate key="home.services.what.whatYouNeedText" />
                    </div>

                    <div class="col-md-4">
                      <h3>
                        <app-translate key="home.services.what.whatWeProvide.title" />
                      </h3>
                      <ul>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.startUpConsulting" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.enhancedDesigns" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.uiRecommendations" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.mobileDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.webDevelopment" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.engagementStrategy" />
                        </li>
                        <li>
                          <app-translate key="home.services.what.whatWeProvide.guearillaMarketingStrategy" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <section id="learn-about">
          <app-cta link-url="#about">
            <span slot="header">
              <app-translate key="home.learnAbout.header" />
            </span>
            <span slot="link">
              <app-translate key="home.learnAbout.link" />
            </span>
          </app-cta>
        </section>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>
              <app-translate key="home.process.title" />
            </h2>

            <content-graphic-lg img-url="assets/graphic-home-discovery.png">
              <h3 slot="header">
                <app-translate key="home.process.discovery" />
              </h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-consulting.png">
              <h3 slot="header">
                <app-translate key="home.process.devConsulting" />
              </h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-development.png">
              <h3 slot="header">
                <app-translate key="home.process.development" />
              </h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-deployment.png">
              <h3 slot="header">
                <app-translate key="home.process.deployment" />
              </h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-feedback.png">
              <h3 slot="header">
                <app-translate key="home.process.userFeedback" />
              </h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - persepectives */}
        <section class="bg-black">
          <div class="container perspectives">
            <img class="img-fluid" src="assets/graphic-home-icons.png" alt="" />
            <h2>
              <app-translate key="home.perspectives.title" />
            </h2>
            <p>
              <app-translate key="home.perspectives.text" />
            </p>
          </div>
        </section>

        {/* section - about */}
        <section id="about" class="bg-gray">
          <div class="container about">
            <h2>
              <app-translate key="home.about.title" />
            </h2>
            <p>
              <app-translate key="home.about.text" />
            </p>

            <app-members members={this.members} />
          </div>
        </section>

        {/* section - partners */}
        <section>
          <div class="container partners">
            <h2>
              <app-translate key="home.partners.title" />
            </h2>
            <p>
              <app-translate key="home.partners.text" />
            </p>

            <div class="partners--logos">
              <img
                class="img-fluid"
                src="assets/logo-ionic-black.png"
                alt="Ionic"
              />
              <img
                class="img-fluid"
                src="assets/logo-angular-black.png"
                alt="Angular"
              />
              <img
                class="img-fluid"
                src="assets/logo-capacitor-black.png"
                alt="Capacitor"
              />
              <img
                class="img-fluid"
                src="assets/logo-stencil-black.png"
                alt="Stencil"
              />
              <img
                class="img-fluid"
                src="assets/logo-mysql-black.png"
                alt="Mysql"
              />
              <img
                class="img-fluid"
                src="assets/logo-mongodb-black.png"
                alt="MongoDB"
              />
              <img
                class="img-fluid"
                src="assets/logo-nodejs-black.png"
                alt="Node JS"
              />
              <img
                class="img-fluid"
                src="assets/logo-aws-black.png"
                alt="AWS"
              />
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">
            <app-translate key="home.contact.title" />
          </span>
          <span slot="link">
            <app-translate key="home.contact.link" />
          </span>
        </app-cta>
      </div>
    );
  }
}
