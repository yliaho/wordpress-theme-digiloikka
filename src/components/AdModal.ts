export default class AdModal {
  private modalVidContainer: HTMLElement = null

  constructor(private element: HTMLElement) {
    this.modalVidContainer = this.element.querySelector('.modal-vid')
  }

  public setEmbed(embedString: string) {
    this.element.style.display = 'flex'
    this.element.innerHTML = embedString
  }
}
