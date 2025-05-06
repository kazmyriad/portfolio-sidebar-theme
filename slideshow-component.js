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
export class SlideshowComponent extends DDDSuper(LitElement) {

  static get tag() {
    return "slideshow-component";
  }
  
  constructor() {
    super();
    this.slidenumber = null;
    this.image = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      slidenumber: { type: Number },
      image:{ type: String },
      title: { type: String }
    };
  }
  
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        width: 100%;
        display: none;
      }

      .slide{
       display: flex;
       height: 400px;
      }
      
      .text {
        color: white;
        font-size: 20px;
        text-align: center;
      }
      
      .fade {
        animation-name: fade;
        animation-duration: 1.5s;
      }

      h1{
        font-size: 25px;
        margin-top: 5px;
      }

      img{
        width: 600px;
        object-fit: cover;
        height: 100%;
        margin-right: 20px;

      }

      @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
        }   

          
    `];
  }


  render() {
    return html`
    <div class="slide fade">
     
      <div class="picture">
        <img src="${this.image}">
      </div>

      <div class="text">
        <h1>${this.title}</h1>
        <slot></slot>
      </div>

    </div>
      `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.dispatchEvent(new CustomEvent('add-slide', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}



globalThis.customElements.define(SlideshowComponent.tag, SlideshowComponent);