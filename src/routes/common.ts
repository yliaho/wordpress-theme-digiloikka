import DtHeader from '../components/DtHeader'
import SmoothScroll from '../components/SmoothScroll'

/**
 * Since the header position is absolute, we will calculate the main
 * section's padding top based on the header's client height in order
 * to not cover it behind the header.
 */
function calcMainSectionPadding() {
  const headerElement = document.querySelector('header')

  if (headerElement) {
    const { height: headerHeight } = headerElement!.getBoundingClientRect()
    const mainSection: HTMLElement | null = document.querySelector(
      'section#main-content'
    )

    mainSection!.style.paddingTop = `${headerHeight || 100}px`
  }

  const hero: HTMLElement = document.body.querySelector('.main-hero')
  const dtHeader = new DtHeader(headerElement)
  dtHeader.initObserver(hero)
}

/**
 * This code will run on every page
 */
export const common: Route = {
  init() {
    calcMainSectionPadding()
    SmoothScroll
  },

  finalize() {}
}
