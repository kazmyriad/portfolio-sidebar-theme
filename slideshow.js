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
    this.slides = [];
    this.currentSlideIndex = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
     slide: { type: Array }
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
      <a class="prev" onclick="decrementSlide()">up</a>
      <a class="next" onclick="incrementSlide()">down</a> 
      <!-- buttons are not showing up at all -->
       <!-- Once I get to to appear, implement function logic -->
      </div>
      <slot></slot>
     </div>
      `;
  }

  // need functions for:
  // 1.) Incrementing/Decrementing currentSlideIndex
  // 2.) when slideNumber = currentSlideIndex, set display = showing or all others to none
  // 3.) onclick? for buttons to increment/decrement currentSlideNumber

  incrementSlide(slide){
   if(slide <= 1 || slide > this.slides.length)
    {
    this.currentSlideIndex = 1;
  }
  else{
    this.currentSlideIndex++;
  }
  
  }

  decrementSlide(slide){
    if(slide <= 1 || slide < this.slides.length)
      {
      this.currentSlideIndex = this.slides.length;   
    }
    else{
      this.currentSlideIndex--;
    }
  }
  
  addSlide(e) {
    const element = e.detail.value
    const slide = {
      number: element.slideNumber,
      element: element,
    }
    this.slides = [...this.slides, slide];
  }

}


globalThis.customElements.define(Slideshow.tag, Slideshow);