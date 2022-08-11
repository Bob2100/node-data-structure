const VALUE = Symbol('value')
const HANDLERS = Symbol('handlers')

export default class StackList {
  constructor(...args) {
    this[VALUE] = args || []
    this[HANDLERS] = {}
  }
  get value() {
    return [...this[VALUE]]
  }
  addEventListener(event, handler) {
    let handlers = this[HANDLERS][event]
    if (!handlers) {
      handlers = this[HANDLERS][event] = []
    }
    handlers.push(handler)
  }
  removeEventListener(event, handler) {
    let handlers = this[HANDLERS][event]
    if (!handlers) {
      return
    }
    const index = handlers.findIndex((item) => item === handler)
    if (index >= 0) {
      handlers.splice(index, 1)
    }
  }
  push(...args) {
    const handlers = this[HANDLERS]['push']
    handlers.forEach((item) => {
      item.apply(this, args)
    })
    return this[VALUE].push(...args)
  }
  pop() {
    const handlers = this[HANDLERS]['pop']
    handlers.forEach((item) => {
      item.apply(this, args)
    })
    return this[VALUE].pop()
  }
  clear() {
    const handlers = this[HANDLERS]['clear']
    handlers.forEach((item) => {
      item.apply(this, args)
    })
    this[VALUE].length = 0
  }
  size() {
    return this[VALUE].length
  }
}
