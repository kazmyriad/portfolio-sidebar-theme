/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPage extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-page";
  }
  
  constructor() {
    super();
    this.title="";
    this.pagenumber=null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: { type: Number },
    };
  }
  
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        background-color: var(--ddd-theme-primary);
        color:var(--ddd-theme-default-white);
        height: 100vh;
        display: block;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      h1
      {
        text-align: right;
        font-family: var(--ddd-font-navigation);
        color: rgb(204, 204, 253);
        background-image: linear-gradient(to right, rgba(122, 43, 73, 0), rgb(84, 43, 122));
        height: 70px;
        padding-right: 50px;
        padding-top: 15px;
        margin-bottom: 0px;
        
      }

      .wrapper {
        padding: 20px;
        
      }
      @media screen and (max-width: 400px){
        .wrapper{
          width: 100%;
          margin-left: 0;
        }
      }

      @media screen and (max-width: 720px) {
        :host{
          width: 100%;
        }
        .wrapper
        {
          transition: all .5s ease-in-out;
        }

        ::slotted(*){
          justify-content: center;
          text-align:center;
          justify-self: center;

          font-size: 15px;
          width: 100%
        }

      }
     
    `];
  }


  render() {
    return html`
    <div class="background-color">
      <h1>${this.title}</h1>
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>
      `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}

globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);