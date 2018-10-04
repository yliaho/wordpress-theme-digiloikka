import * as anime from 'animejs'
import NavDropdown from './NavDropdown'

export default class DtHeader {
  private observer: IntersectionObserver = null
  public intersectionElement: HTMLElement = null
  public hasBackground: boolean = false

  public headerText: HTMLElement = null

  constructor(private element: HTMLElement) {
    this.headerText = this.element.querySelector('.header-text')
    this.createNavDropdowns()
  }

  public initObserver(observableElement: HTMLElement) {
    this.intersectionElement = observableElement

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: []
    }

    if (Array.isArray(options.threshold)) {
      for (let i = 0; i <= 1; i += 0.01) {
        options.threshold.push(i)
      }
    }

    this.observer = new IntersectionObserver(
      this.observerCallback.bind(this),
      options
    )

    this.observer.observe(this.intersectionElement)
  }

  private isHeaderIntersecting(rect: ClientRect) {
    const { height: headerHeight } = this.element.getBoundingClientRect()

    if (rect.bottom <= headerHeight) {
      return true
    } else {
      false
    }
  }

  private observerCallback(
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) {
    entries.forEach(({ boundingClientRect }) => {
      let lastState = this.hasBackground
      this.hasBackground = this.isHeaderIntersecting(boundingClientRect)

      if (lastState === this.hasBackground) return

      if (this.hasBackground) {
        this.fadeInBg()
        this.fadeText()
      } else {
        this.fadeOutBg()
        this.fadeOutText()
      }
    })
  }
  private fadeText() {
    this.headerText.style.display = 'block'
  }
  private fadeOutText() {
    this.headerText.style.display = 'none'
  }

  private fadeInBg() {
    const fadeInAnim = anime({
      targets: this.element,
      backgroundColor: 'rgb(53, 53, 53'
    })
  }

  private fadeOutBg() {
    const fadeOutAnim = anime({
      targets: this.element,
      backgroundColor: 'rgba(0,0,0,0.0)'
    })
  }

  private createNavDropdowns() {
    const navContainerElement = this.element.querySelector(
      '.nav-container'
    ) as HTMLElement
    const navDropdowns = navContainerElement.querySelectorAll(
      '.nav-ul li.menu-item-has-children'
    )

    for (let navDropdown of Array.from(navDropdowns)) {
      new NavDropdown(navDropdown as HTMLElement)
    }
  }
}
