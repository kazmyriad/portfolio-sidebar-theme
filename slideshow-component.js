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
    this.slideNumber = null;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      slideNumber: { type: Array }
    };
  }
  
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        width: 100px;
        height: 100%;
        
      }
      
      .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8pxs;
        bottom: 8px;
        width: 100%;
        text-align: center;
      }

      img{
        width: 70%;
        float: left;
      }

          
    `];
  }


  render() {
    return html`
    <div class="slide">
      <img src="https://file.garden/Zea8jho9KEiz9frQ/School/Screenshot%202025-05-06%20145438.png">
      <div class="text">Blah balhsbsfjb fs florem ipsulendbhg</div>
    </div>
      `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    this.dispatchEvent(new CustomEvent('slide-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }))
  }
}



globalThis.customElements.define(SlideshowComponent.tag, SlideshowComponent);