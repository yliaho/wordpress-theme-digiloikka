export default class AdModal {
  private modalVidContainer: HTMLElement = null
  public modalVideoContent: HTMLElement = null
  private modalCloseSpan: HTMLElement = null

  constructor(private element: HTMLElement) {
    this.modalVidContainer = this.element.querySelector('.modal-vid')
    this.modalCloseSpan = this.element.querySelector('span.close')

    // click on myModal
    this.element.addEventListener('click', e => {
      if (e.target !== this.element) return
      this.hideEmbed()
    })

    // click on close span
    this.modalCloseSpan.addEventListener('click', e => {
      this.hideEmbed()
    })
  }

  public setEmbed(embedString: string) {
    this.element.style.display = 'flex'
    this.modalVideoContent = this.element.querySelector(
      '.modal-content .video-content'
    )
    this.modalVideoContent.innerHTML = embedString

    for (let fullscrnAttr of ['allowfullscreen', 'webkitallowfullscreen']) {
      this.modalVideoContent
        .querySelector('iframe')
        .removeAttribute(fullscrnAttr)
    }
  }

  public hideEmbed() {
    this.modalVideoContent.innerHTML = ''
    this.element.style.display = 'none'
  }
}
