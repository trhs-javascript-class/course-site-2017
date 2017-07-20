/* global hljs */
// based on aurelia-markdown by ChiefZ - https://github.com/ChiefZ/aurelia-markdown/blob/master/src/markdown-element.ts

import {bindable, inject, noView, processContent} from 'aurelia-framework';
import * as showdown from 'showdown';

@processContent(false)
@noView
@inject(Element, showdown)
export class Markdown {
  @bindable model;

  constructor(element, showdown) {
    this.element = element;
    this.converter = new showdown.Converter();
  }

  attached() {
    this.root = this.element.shadowRoot || this.element;

    if (!this.model) {
      this.modelChanged(this.element.innerHTML);
    } else {
      this.modelChanged(this.model);
    }
  }

  modelChanged(newValue, oldValue) {
    if (!this.root) {
      return;
    }

    this.root.innerHTML = this.converter.makeHtml(newValue);

    for (const node of this.root.querySelectorAll("pre code")) {
      hljs.highlightBlock(node);
    }
  }
}

