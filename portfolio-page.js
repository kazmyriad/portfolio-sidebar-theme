/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-page";
  }

  // Functionality for the scroll is NOT within the pages or screen itself, logic has to be 
  // handled elsewhere (in THIS wrapper)

  //THIS COMPONENT IS ACTING AS A WRAPPER, should contain every other web component
  // component: screen wrappers (just to determine spacing/consistency)
  // Main purpose of this component = sizing and consistency

  //
  
  constructor() {
    super();
   
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }

      .wrapper
      {
        max-width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      // WIDTH of this container is the width of the screen (a set width) MINUS the sidebar width (or else content will be hidden)
    
    `];
  }


  render() {
    return html`
      <div class="wrapper">
        <slot>

        </slot>
      </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);