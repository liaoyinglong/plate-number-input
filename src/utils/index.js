export function throttle(fn, time = 100) {
  let timer
  return function(...args) {
    if (timer == null) {
      fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, time)
    }
  }
}

export function once(fn) {
  return function(...args) {
    if (fn) {
      let ret = fn.apply(this, args)
      fn = null
      return ret
    }
  }
}
