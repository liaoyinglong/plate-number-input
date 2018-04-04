export default {
  on(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
      let el = e.target
      while (!el.matches(selector)) {
        if (element === el) {
          el = null
          break
        }
        el = el.parentNode
      }
      el && fn.call(el, e, el)
    })
    return element
  },
  // http://stackoverflow.com/a/35385518/1262580
  create(htmlStr) {
    var template = document.createElement('template')
    template.innerHTML = htmlStr.trim()
    return template.content.firstChild
  },
}
