export function toggle(...actions) {
  return function(...args) {
    const action = actions.shift()
    actions.push(action)
    return action.apply(this, args)
  }
}

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
