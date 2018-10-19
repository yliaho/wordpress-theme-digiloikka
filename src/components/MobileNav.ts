import * as anime from 'animejs'
import getWindowClientWidth from '../utils/getWindowClientWidth'
const mdBreakpoint = 1024
const xsBreakpoint = 767
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
    this.navEl.classList.remove('inactive')
    this.navEl.classList.add('active')
    if (getWindowClientWidth() < mdBreakpoint) {
      console.log(getWindowClientWidth())
      const fadeInMobileNav = anime({
        targets: this.navEl,
        left: ['100vw', '0vw'],
        easing: 'easeOutCubic',
        duration: 400
      })
    } else if (getWindowClientWidth() > xsBreakpoint) {
      const fadeInMobileNav = anime({
        targets: this.navEl,
        left: ['100vw', '60vw'],
        easing: 'easeOutCubic',
        duration: 400
      })
    }
    this.socialContainer()
  }

  private closeNav() {
    this.navEl.classList.remove('active')
    this.socialIcons.style.display = 'none'
  }
  private socialContainer() {
    console.log('how to fuck am i supposed to work')
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
      console.log('asasd')
    })
  }
}
