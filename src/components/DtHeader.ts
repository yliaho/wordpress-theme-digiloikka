import * as anime from 'animejs'

export default class DtHeader {
  private observer: IntersectionObserver = null
  public intersectionElement: HTMLElement = null
  public hasBackground: boolean = false

  public headerText: HTMLElement = null

  constructor(private element: HTMLElement) {}

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
      } else {
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
