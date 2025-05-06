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
        width: 100%;
        justify-self: center;
      }

      .prev, .next {
        cursor: pointer;
        margin: 10px;
        font-size: 20px;
        color: white;
      }

      .slides{
        animation-name: fade;
        animation-duration: 1.5s;
        display: block;
      }

      .buttons{
        justify-content: center;
        text-align: center;
        display: block;
        margin-top: 10px;
      }

      span{
        position: absolute;
        margin: 10px;
        font-size: 20px;
        padding: 5px;
        background-color: black;
        border-radius: 20%;
      }
    
    `];
  }


  render() {
    return html`
    <div class="container">
      <div class="slides">
        <span>${this.currentSlideIndex + 1} / ${this.slides.length}</span>
        <slot></slot>
      </div>
      <div class="buttons">
        <a class="prev" @click="${this.decrementSlide}"><button>&#10094;</button></a>
        <a class="next" @click="${this.incrementSlide}"><button>&#10095;</button></a> 
      </div>
    </div>
    
      `;
  }

  // need functions for:
  // 2.) when slideNumber = currentSlideIndex, set display = showing or all others to none
  // 3.) onclick? for buttons to increment/decrement currentSlideNumber

  firstUpdated() {
    super.firstUpdated?.();
    this.updateSlideVisibility();
  }
  
 
  incrementSlide(){
    if(this.currentSlideIndex < this.slides.length -1) {
      this.currentSlideIndex++;
    }
    else{
      this.currentSlideIndex = 0;
    }

    this.updateSlideVisibility();
  }

  decrementSlide(){
    if(this.currentSlideIndex >= 1) {
      this.currentSlideIndex--;
    }
    else{
      this.currentSlideIndex = this.slides.length - 1;
    }

    this.updateSlideVisibility();
  }
  
  addSlide(e) {
    const element = e.detail;
    const slide = {
      number: element.slideNumber,
      element: element,
    }
    this.slides = [...this.slides, slide];
  }

  updateSlideVisibility() {
    const slot = this.shadowRoot.querySelector('slot');
    // if (!slot) return; 
  
    const slides = slot.assignedElements(); 
    slides.forEach((slide, index) => {
      slide.style.display = index === this.currentSlideIndex ? 'block' : 'none';
    });
  }
  

}


globalThis.customElements.define(Slideshow.tag, Slideshow);