/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-page-wrapper`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPageWrapper extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-page-wrapper";
  }
  
  constructor() {
    super();
    this.title="";
    this.breakpoint="";
   
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
      
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        display: inline-block;
      }
    `];
  }


  render() {
    return html`
      <div class="wrapper">
        <slot>

        </slot>
      </div>`;
  }

 

  //^^ somehow causing margins to disappear, unsure why

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioPageWrapper.tag, PortfolioPageWrapper);