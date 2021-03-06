import * as anime from 'animejs'
import MobileNav from './MobileNav'
import NavDropdown from './NavDropdown'

export default class DtHeader {
  private observer: IntersectionObserver = null
  public intersectionElement: HTMLElement = null
  public hasBackground: boolean = false

  constructor(private element: HTMLElement) {
    this.createHamburgerMenu()
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
      for (let i = 0; i <= 1; i += 0.001) {
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
      } else {
        this.fadeOutBg()
      }
    })
  }

  private fadeInBg() {
    anime.remove(this.element.querySelector('.header-background-cover'))
    anime({
      targets: this.element.querySelector('.header-background-cover'),
      opacity: {
        value: 0.6,
        duration: 0
      },
      backgroundPositionY: {
        value: ['54%', '50%'],
        duration: 1200,
        elasticity: 400,
        delay: 0
      }
    })
    this.element.classList.remove('above')
    this.element.classList.add('below')
  }

  private fadeOutBg() {
    anime.remove(this.element.querySelector('.header-background-cover'))
    anime({
      targets: this.element.querySelector('.header-background-cover'),
      opacity: 0,
      duration: 0
    })
    this.element.classList.remove('below')
    this.element.classList.add('above')
  }

  private createHamburgerMenu() {
    const hamburgerEl = this.element.querySelector('.hamburger-container i')
    const navEl = this.element.querySelector('.nav-ul')
    const hamburgerMenu = new MobileNav(
      hamburgerEl as HTMLElement,
      navEl as HTMLElement
    )
  }

  private createNavDropdowns() {
    const navContainerElement = this.element.querySelector(
      '.nav-container'
    ) as HTMLElement
    const navDropdowns = navContainerElement.querySelectorAll(
      '.nav-ul li.menu-item-has-children'
    )

    if (navDropdowns) {
      for (let navDropdown of Array.from(navDropdowns)) {
        new NavDropdown(navDropdown as HTMLElement)
      }
    }
  }
}
