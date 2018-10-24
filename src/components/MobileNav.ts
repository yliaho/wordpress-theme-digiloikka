import * as anime from 'animejs'
import getWindowClientWidth from '../utils/getWindowClientWidth'

export default class MobileNav {
  private closeButtonEl: HTMLElement
  private socialIcons: HTMLElement
  constructor(private element: HTMLElement, private navEl: HTMLElement) {
    this.socialContainer()
    this.navEl.classList.add('inactive')
    this.createCloseButton()
    this.socialIcons.style.display = 'none'
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
    this.navEl.classList.add('active')

    const fadeInMobileNav = anime({
      targets: this.navEl,
      translateX: [document.documentElement.clientWidth, 0],
      easing: 'easeOutCubic',
      duration: 400
    })
    this.socialContainer()
  }

  private closeNav() {
    this.socialIcons.style.display = 'none'

    const fadeOutMobileNav = anime({
      targets: this.navEl,
      translateX: [0, document.documentElement.clientWidth],
      easing: 'easeInQuad',
      duration: 400,
      complete: () => {
        this.navEl.classList.remove('active')
        this.navEl.style.transform = 'initial'
      }
    })
  }
  private socialContainer() {
    this.socialIcons = document.querySelector('.social-container-mobile')
    this.socialIcons.style.display = 'block'
    this.navEl.appendChild(this.socialIcons)
  }
  private createCloseButton() {
    this.closeButtonEl = document.createElement('div')
    this.closeButtonEl.classList.add('close-button', 'fa', 'fa-times')
    this.navEl.appendChild(this.closeButtonEl)

    this.closeButtonEl.addEventListener('click', () => {
      this.closeNav()
    })
  }
}
