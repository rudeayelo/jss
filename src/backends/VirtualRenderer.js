/* @flow */
/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
export default class VirtualRenderer {
  createElement() {}
  setStyle() {
    return true
  }
  getStyle() {
    return ''
  }
  setSelector() {
    return true
  }
  getSelector() {
    return ''
  }
  attach() {}
  detach() {}
  deploy() {}
  insertRule() {
    return true
  }
  deleteRule() {
    return true
  }
  getRules() {}
}
