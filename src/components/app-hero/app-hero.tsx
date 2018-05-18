import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-hero',
  styleUrl: 'app-hero.scss',
})
export class AppHero {
  @Prop() linkUrl: string;
  @Prop() backgroundUrl: string;
  @Prop() textNoWrap: boolean;
  @Prop() hideLink: boolean;
  @Element() host: Element;

  componentDidLoad() {
    console.log("app-hero query selector");
    const element = document.querySelector('header.hero') as HTMLElement;
    element.style.backgroundImage = `url('${this.backgroundUrl}')`;
  }

  render() {
    return (
      <header class="hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-8 col-lg-6">
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
              {!this.hideLink ? (
                <a href="#second-content" class="btn btn-primary">
                  <slot name="link" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    );
  }
}
