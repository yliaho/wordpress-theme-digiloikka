import navi from '../components/mobileNav'
import accordion from "../components/accordion"
/**
 * Since the header position is absolute, we will calculate the main
 * section's padding top based on the header's client height in order
 * to not cover it behind the header.
 */
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
    navi()
    accordion()
  },

  finalize() {}
}


