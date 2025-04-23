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
      breakpoint: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        width: 100%;
        margin: 20px;
        
      }

      .wrapper
      {
        width: 100%;
        margin: 20px;
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

  // Is  telling the wrapper a thing is happening. should I even be using connected callback. 
  connectedCallback(){
    super.connectedCallback();
    const page = this.getAttribute('breakpoint');

    this.dispatchEvent(new CustomEvent('new-page'), {
      detail: { breakpoint },
      bubbles: true,
      composed: true
    });
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

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);