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
    return "slide-show";
  }
  
  constructor() {
    super();
    this.slides = [];
    this.currentSlideIndex = 0;
    this.addEventListener("add-slide", this.addSlide.bind(this));
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
     slides: { type: Array },
     currentSlideIndex: { type: Number },
    };
  }
  
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
       background-color: blue;
       height: 100vh;
      }

      .container{
        width: 1000px;
        
      }

      .prev, .next {
        
        background-color: blue;
      }
      
      .debugging{
        background-color: blue;
        width: 500px;
      }

      ::slotted(*){
        display: none;
      } //???? do I need to shadowRoot query the slotted elements to change their display
     
    `];
  }


  render() {
    return html`
    <div class="container">
     <div class="debugging">
      <a class="prev" @click="${this.incrementSlide}"><button>up</button></a>
      <a class="next" @click="${this.decrementSlide}"><button>down</button></a> 
      <!-- buttons are not showing up at all -->
       <!-- Once I get to to appear, implement function logic -->
      <p>Current Slide: ${this.currentSlideIndex}</p>
      <p>Number of Slides: ${this.slides.length}</p>
      </div>
      <div>
        <slot></slot>
      </div>
     </div>
      `;
  }

  // need functions for:
  // 1.) Incrementing/Decrementing currentSlideIndex
  // 2.) when slideNumber = currentSlideIndex, set display = showing or all others to none
  // 3.) onclick? for buttons to increment/decrement currentSlideNumber

  incrementSlide(){
    if(this.currentSlideIndex < this.slides.length) {
      this.currentSlideIndex++;
    }
  }

  decrementSlide(){
    if(this.currentSlideIndex > 1) {
      this.currentSlideIndex--;
    }
  }
  
  addSlide(e) {
    const element = e.detail;
    const slide = {
      number: element.slidenumber,
      element: element,
    }
    this.slides = [...this.slides, slide];
  }

}


globalThis.customElements.define(Slideshow.tag, Slideshow);