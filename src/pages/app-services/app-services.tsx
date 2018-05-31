import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-services',
  styleUrl: 'app-services.scss',
})
export class AppServices {
  @Prop() match: any;

  @State() name: string;

  componentWillLoad() {
    console.log('app-services ComponentWillLoad()');
    if (!!this.match.params.name) {
      this.name = this.match.params.name;
    }
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero
          link-url="mailto:hello@openforge.io"
          background-url="assets/bg-hero-wireframes-pencils.jpg"
        >
          <span slot="header">
            Creative Digital Solutions for Real World Problems
          </span>
          <span slot="body">
            We use Google standards, Test Driven Development, and Code
            Cleanliness (linting) a in all our development contributions. We
            believe in using only the best practices for your unique
            application.
          </span>
          <span slot="link">Learn More</span>
        </app-hero>

        {/* aside - cta */}
        <app-cta link-url="mailto:hello@openforge.io">
          <span slot="header">Let's work together!</span>
          <span slot="link">Get in touch</span>
        </app-cta>
      </div>
    );
  }
}
