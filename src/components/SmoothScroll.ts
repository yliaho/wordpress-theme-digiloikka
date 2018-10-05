export default class SmoothScroll {
  public ScrollToBlock: HTMLElement = null

  constructor(public element: HTMLElement) {
    this.ScrollToBlock = element.querySelector('#leaders')
  }

  public Smooth() {
    this.ScrollToBlock.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
