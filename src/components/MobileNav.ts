export default class MobileNav {
  constructor(private element: HTMLElement, private navEl: HTMLElement) {
    console.log('asdasd')
    this.element.addEventListener(
      'click',
      this.hamburgerClickListener.bind(this)
    )
  }

  public hamburgerClickListener(e: Event) {
    this.navEl.classList.toggle('active')
  }
}
