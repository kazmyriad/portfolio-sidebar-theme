/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './portfolio-sidebar.js';
import '@haxtheweb/scroll-button/scroll-button.js';

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(LitElement) {

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
    this.pages = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        height: 100vh;
        height: 100%;
     
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }

      portfolio-sidebar {
        display: block;
        width: 310px;
        position: fixed;
        top: 0;
        bottom:0;
        left: 0;
        color: var(--portfolio-sidebar-color, white);
      }
      .wrapper {
        margin-left: 310px;
      }
      a {
        color: white;
        font-size: var(--ddd-font-size-m);
      }

      ul {
          list-style-type: none;
          line-height: 70px;
          margin-right: 10px;
      }
      
      
      a{
        color: var(--ddd-theme-default-wonderPurple);
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 45px;
        font-size: 30px;
        
      }

      a:link, a:visited {
        color: var(--ddd-theme-default-athertonViolet);
        background-color: var(--ddd-theme-default-wonderPurple);
        text-decoration: none;
      
      }

      a:hover{
        transition: all .5s ease-in-out;
        color: var(--ddd-theme-default-accent);
        background-color: var(--ddd-theme-default-skyBlue);
      }

      scroll-button{
        position: fixed;
        margin-top: 85vh;
        margin-left: 95vw;
      }
 
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <scroll-button></scroll-button>
    <portfolio-sidebar>
      
      <ul>
        ${this.pages.map((page, index) => html`<li><a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">${page.title}</a></li>`)}
      </ul>
    </portfolio-sidebar>
    <div class="wrapper" @page-added="${this.addPage}">
      <slot></slot>
    </div>`;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    }
    this.pages = [...this.pages, page];
  }

}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);