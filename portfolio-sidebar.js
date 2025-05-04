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
export class PortfolioSidebar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar";
  }

  // Functionality for the scroll is NOT within the pages or screen itself, logic has to be 
  // handled elsewhere (in THIS wrapper)

  //THIS COMPONENT IS ACTING AS A WRAPPER, should contain every other web component
  // component: screen wrappers (just to determine spacing/consistency)
  // Main purpose of this component = sizing and consistency

  //
  
  constructor() {
    super();
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }

      .wrapper
      {
        width: 310px;
        height: 100vh;
        top: 0;
        overflow-x: hidden;
        background:  linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),
        url(https://i.pinimg.com/736x/be/67/57/be6757d2610cc12e64ce497c43734aac.jpg);
        background-color: black;
        display: flex;
        text-align: center;
      }

      .links{
        margin: auto;
      }
      @media screen and (max-width: 400px){
        .wrapper{
          display:none;
        }
      }

      @media screen and (max-width: 720px) {
        .wrapper
        {
          transition: all .5s ease-in-out;
          width: 100px;
          background:  linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ),
        url(https://i.pinimg.com/736x/be/67/57/be6757d2610cc12e64ce497c43734aac.jpg);
        }
        
      }
 
      
    `];
  }


  render() {
    return html`
      <div class="wrapper">
        <div class="links">
           <slot></slot>
        </div>
      </div>`;
  }

}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);