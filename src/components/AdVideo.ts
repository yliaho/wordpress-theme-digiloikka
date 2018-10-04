export default class AdVideo {
  private btn: HTMLElement
  public onClickCallback: Function

  constructor(private element: HTMLElement) {
    this.btn = this.element.querySelector('#myBtn')

    this.click()
  }

  private click(): void {
    this.element.addEventListener('click', this.onClickHandle.bind(this))
  }

  private onClickHandle(): void {
    this.onClickCallback(this.element.dataset.embed)
  }
}
