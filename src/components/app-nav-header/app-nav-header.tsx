import { Component, Listen } from '@stencil/core';
@Component({
  tag: 'app-nav-header',
  styleUrl: 'app-nav-header.scss',
})
export class AppNavHeader {
  unsubscribe: () => void;

  componentDidLoad() {
    this.navbarEl = document.querySelector('nav.navbar');
  }

  componentDidUnload() {
    this.unsubscribe();
  }

  @Listen('window:scroll')
  handleScroll() {
    this.setIsScrolled();

    if (this.isScrolled && !this.navbarEl.classList.contains('background')) {
      this.navbarEl.classList.add('background');
    } else if (!this.isScrolled) {
      this.navbarEl.classList.remove('background');
    }
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark align-items-lg-end fixed-top">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-md-auto">
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Home
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/about"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    About
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/contact"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Contact
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <stencil-route-link
                    url="/opportunities"
                    anchorClass="nav-link"
                    activeClass="active"
                  >
                    Opportunities
                  </stencil-route-link>
                </li>
                <li
                  class="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <a
                    class="nav-link"
                    href="https://github.com/openforge"
                    target="_blank"
                  >
                    <div class="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
