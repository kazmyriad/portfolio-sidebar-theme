/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  // Functionality for the scroll is NOT within the pages or screen itself, logic has to be 
  // handled elsewhere (in THIS wrapper)

  //THIS COMPONENT IS ACTING AS A WRAPPER, should contain every other web component
  // component: screens
  // component: sidebar
  // component: scroll to the top button? (footer)
  // component: this wrapper
  // component: screen wrappers (just to determine spacing/consistency)
  // MAIN reason for wrapper element: the logic for jumping through the page is in THIS wrapper,
  // little actual design here (Sidebar may live here?) primarily just a <slot> tag

  //hax-the-club - for screen component/component layouts and scroll behavior

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
        height: 100%;
     
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        
      }

      .wrapper{
        display: flex;
        height: 100vh;
      }

      /* is not resizing when child content is growing */
      /* Is not resizing at all? */
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>`;
  }

  // Listening for a new page
  // firstUpdated(){
  //   this.shadowRoot.addEventListener('page-added', (e) =>{
  //   })
  // }
  // firstUpdated vs connectedCallback?

  connectedCallback(){
    super.connectedCallback();
    this.shadowRoot.addEventListener('new-page', (e) =>{

    })

  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);