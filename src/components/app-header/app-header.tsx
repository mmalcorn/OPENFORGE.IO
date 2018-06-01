import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  @Element() el: Element;
  @Prop() linkUrl: string;
  @Prop() backgroundUrl: string;
  @Prop() hideButton: boolean = false;

  scrollElement;

  componentDidLoad() {
    if (this.hideButton) {
      const button = this.el.querySelector(
        'btn btn-primary btn-arrow'
      ) as HTMLElement;
      button['0'].style.visibility = 'hidden';
    }
    try {
      this.scrollElement = this.el.querySelector(this.linkUrl) as HTMLElement;
    } catch (e) {
      console.log('app-header error ', e);
    }
  }

  scrollIntoView = () => {
    this.scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  render() {
    return (
      <header
        class="header d-flex flex-column justify-content-center"
        style={{ backgroundImage: `url('${this.backgroundUrl}')` }}
      >
        <slot name="header" />

        <slot name="subheader" />

        {this.hideButton ? null : (
          <a class="btn btn-primary btn-arrow" onClick={this.scrollIntoView}>
            <i class="fa fa-arrow-down" aria-hidden="true" />
            <span class="sr-only">Scroll to content</span>
          </a>
        )}
      </header>
    );
  }
}
