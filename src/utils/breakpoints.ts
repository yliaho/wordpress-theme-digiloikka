export default {
  lg: 1200,
  md: 1024,
  sm: 768,
  xs: 767,
  withPixelPrefix(breakpoint) {
    return `${this[breakpoint]}px`
  }
}
