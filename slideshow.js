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
export class Slideshow extends DDDSuper(LitElement) {

  static get tag() {
    return "slideshow";
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
    <div class="container">
      
    </div>
      `;
  }
}

globalThis.customElements.define(Slideshow.tag, Slideshow);