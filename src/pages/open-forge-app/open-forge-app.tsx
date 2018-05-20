import { Component, Listen } from '@stencil/core';
import { RouterSwitch } from '@stencil/router';
// import { ActiveRouter, RouterHistory, LocationSegments, RouterSwitch } from '@stencil/router';

import { polyfill } from 'smoothscroll-polyfill';

// import { gtag, GA_TRACKING_ID } from '../../shared/gtag';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  render() {
    return (
      <div class="root">
        <app-nav-header />
        <main />
        <app-footer />
        <div>
          <stencil-router>
            <RouterSwitch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about" component="app-about" />
              <stencil-route url="/contact" component="app-contact" />
              <stencil-route
                url="/opportunities"
                component="app-opportunities"
              />
            </RouterSwitch>
          </stencil-router>
        </div>
      </div>
    );
  }
}
