import { Component, Listen, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-hero-home',
  styleUrl: 'app-hero-home.scss',
})
export class AppHeroHome {
  @Element() el: Element;
  @Prop() textNoWrap: boolean;

  componentWillLoad() {
    console.log('Component will load, app-hero-home');
  }
  componentDidLoad() {
    this.handleImage();
  }

  // will refactor in the future
  @Listen('window:resize')
  handleImage() {
    let element;
    let element2;
    try {
      element = this.el.querySelector('header.hero-home') as HTMLElement;
      element2 = this.el.querySelector(
        'header.hero-home .content'
      ) as HTMLElement;
    } catch (e) {
      console.log('app-hero-home undefined', e);
    }

    if (window.innerWidth < 576) {
      // small
      element.style.backgroundImage = `url('assets/bg-hero-town-sm.jpg')`;
      element2.style.background = 'none';
    } else if (window.innerWidth < 992) {
      // medium
      element.style.backgroundImage = `url('assets/bg-hero-town-md.jpg')`;
      element2.style.background = 'none';
    } else {
      // large
      element.style.backgroundImage = `url('assets/bg-hero-town.jpg')`;
      element2.style.background = `url('assets/graphic-home-monitor.png') top center no-repeat`;
    }
  }

  render() {
    return (
      <header class="hero-home">
        <div class="container">
          <div class="content">
            <h2
              class={{
                'text-nowrap': this.textNoWrap,
              }}
            >
              <slot name="header" />
            </h2>

            <p>
              <slot name="body" />
            </p>
            <a href="#services" class="btn btn-primary">
              <slot name="link" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
