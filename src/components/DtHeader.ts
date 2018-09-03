import * as anime from 'animejs'

export default class DtHeader {
  private observer: IntersectionObserver = null
  public intersectionElement: HTMLElement = null
  public hasBackground: boolean = false

  constructor(private element: HTMLElement) {}

  public initObserver(observableElement: HTMLElement) {
    this.intersectionElement = observableElement

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
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
    observer: IntersectionObserver
  ) {
    entries.forEach(({ boundingClientRect }) => {
      let lastState = this.hasBackground
      this.hasBackground = this.isHeaderIntersecting(boundingClientRect)

      if (lastState === this.hasBackground) return

      if (this.hasBackground) {
        console.log('what')
        this.fadeInBg()
      } else {
        console.log('hei')
        this.fadeOutBg()
      }
    })
  }

  private fadeInBg() {
    const fadeInAnim = anime({
      targets: this.element,
      backgroundColor: 'rgba(0,0,0,1.0)'
    })
  }

  private fadeOutBg() {
    const fadeOutAnim = anime({
      targets: this.element,
      backgroundColor: 'rgba(0,0,0,0.0)'
    })
  }
}
