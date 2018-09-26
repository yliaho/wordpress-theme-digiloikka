export default class Modal {
  private modal: HTMLElement

  private btn: HTMLElement
  private span: HTMLElement

  constructor(private element: HTMLElement) {
    this.btn = this.element.querySelector('#myBtn')
    this.modal = this.element.querySelector('#myModal')
    this.span = this.element.querySelector('#close')
    this.click()
    console.log(this.element)
  }

  private click(): void {
    this.btn.addEventListener('click', this.openModal.bind(this))
    this.span.addEventListener('click', this.closeModal.bind(this))
    console.log(this.btn)
  }

  private openModal(): void {
    this.modal.style.display = 'flex'
  }
  private closeModal(): void {
    this.modal.style.display = 'none'
  }
}
