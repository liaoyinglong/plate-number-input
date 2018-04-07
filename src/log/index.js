export function error(...thing) {
  throw new Error(...thing)
}
export function warn(...thing) {
  console.log(['WARING:', ...thing].join(' '))
}

export function note(...thing) {
  console.log(['NOTE:', ...thing].join(' '))
}
