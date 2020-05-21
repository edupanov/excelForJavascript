import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || ''
  }
  // return a component template
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListener()
  }

  destroy() {
    this.removeDOMListener()
  }
}


