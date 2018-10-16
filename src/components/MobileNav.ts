import * as anime from 'animejs'

export default class MobileNav {
  private closeButtonEl: HTMLElement
  constructor(private element: HTMLElement, private navEl: HTMLElement) {
    this.navEl.classList.add('inactive')
    this.createCloseButton()
    this.element.addEventListener(
      'click',
      this.hamburgerClickListener.bind(this)
    )
  }

  public hamburgerClickListener(e: Event) {
    this.navEl.classList.toggle('active')
    if (this.navEl.classList.contains('active')) {
      this.openNav()
    }
  }
  private openNav() {
    this.navEl.classList.remove('inactive')
    this.navEl.classList.add('active')
    const fadeInMobileNav = anime({
      targets: this.navEl,
      left: ['100vw', '20vw'],
      easing: 'easeOutCubic',
      duration: 400
    })
  }
  private closeNav() {
    this.navEl.classList.remove('active')
  }
  private createCloseButton() {
    this.closeButtonEl = document.createElement('div')
    this.closeButtonEl.classList.add('close-button', 'fa', 'fa-times')
    this.navEl.appendChild(this.closeButtonEl)

    this.closeButtonEl.addEventListener('click', () => {
      this.closeNav()
      console.log('asasd')
    })
  }
}
