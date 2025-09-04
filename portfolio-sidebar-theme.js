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
        color: var(--portfolio-sidebar-color, --ddd-theme-default-white);
      }

      .wrapper {
        margin-left: 310px;
       
      }
    

      .pages {
          list-style-type: none;
          line-height: 70px;
          margin-right: 30px;
      }
      
    
      a, a:link, a:visited{
        color: var(--ddd-theme-default-athertonViolet);
        background-color: var(--ddd-theme-default-wonderPurple);
        text-decoration: none;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 25px;
      }

      a:hover{
        transition: all .5s ease-in-out;
        color: var(--ddd-theme-default-accent);
        background-color: var(--ddd-theme-default-skyBlue);
      }

      scroll-button{
        position: fixed;
        margin-top: 650px;
        margin-left: 94%;

      }

      .header{
        margin-left: 300px;
        margin-top: 50px;
      }

      @media screen and (max-width: 400px){
        portfolio-sidebar{
          display: none;
        }

        .wrapper{
          margin-left: 0px;
          width: 100%;
        }

        .pagesWrapper{
          display:none;
        }

        scroll-button{
          margin-left: 45%;
          margin-top: 725px;
          transition: all .5s ease-in-out;
        }
      }
      
      @media screen and (min-width: 400px) and (max-width: 720px) {
        portfolio-sidebar
        {
          width: 100px;
        }

        .wrapper
        {
          transition: all .5s ease-in-out;
          margin-left: 100px;
        }     

        a, a:link, a:visited{
          transition: all .5s ease-in-out;
          background: none;
          font-size: 20px;
          padding: 5px;
        }

        .pages{
          line-height: 50px;
          width: 100%;
          justify-items: center;
        }

        .pagesWrapper{
          width: 100px;
          justify-items: center;
        }

        scroll-button{
          margin-left: 30px;
          transition: all .5s ease-in-out;
        }

        p{
          font-size: 5px;
        }

      }
 
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <scroll-button></scroll-button>
    <portfolio-sidebar>
      <div class="pagesWrapper">
      <ul class="pages">
        ${this.pages.map((page, index) => html`<li><a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">${page.title}</a></li>`)}
      </ul>
      </div>
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