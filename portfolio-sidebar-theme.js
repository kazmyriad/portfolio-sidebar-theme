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
        --simple-icon-width: 50px;
        --simple-icon-height: 50px;
        height: 100vh;
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
    

      ul {
          list-style-type: none;
          line-height: 70px;
          margin-right: 30px;
      }
      
      
      a{
        color: var(--ddd-theme-default-wonderPurple);
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 25px;
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
        margin-top: 80vh;
        margin-left: 93vw;

      }

      h1
      {
        font-size: 60px;
        text-align: center;
      }
      

      .star
      {
        width: 150px;
        margin: auto;
        margin-top: 50px;
        display: block;
        background-color:var(--ddd-theme-default-wonderPurple);
        border-radius: 100%;
        padding: 20px;
      }

      .header{
        margin-left: 300px;
        margin-top: 50px;
      }
 
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <scroll-button></scroll-button>

    <div class="header">
      <img class="star" src="https://file.garden/Zea8jho9KEiz9frQ/starry%201.png" alt="A star with glasses, waving at you :D">
      <h1>Portfolio</h1>
    </div>

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