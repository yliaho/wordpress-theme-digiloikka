function calcMainSectionPadding() {
  const header = document.querySelector('header')

  if (header) {
    const { height: headerHeight } = header!.getBoundingClientRect()
    const mainSection: HTMLElement | null = document.querySelector(
      'section#main-content'
    )

    mainSection!.style.paddingTop = `${headerHeight || 100}px`
  }
}

/**
 * This code will run on every page
 */
export const common: Route = {
  init() {
    calcMainSectionPadding()
  },

  finalize() {}
}
