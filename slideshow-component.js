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
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
     
    };
  }
  
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
       
      }
    
     
    `];
  }


  render() {
    return html`
    <div class="slide">
      <div class="numbertext">1 / 3</div>
      <img src="img1.jpg" style="width:100%">
      <div class="text">Caption Text</div>
    </div>
      `;
  }
}

globalThis.customElements.define(SlideshowComponent.tag, SlideshowComponent);