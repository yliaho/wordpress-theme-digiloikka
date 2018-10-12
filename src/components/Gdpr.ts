export default class Gdpr {
  public gpop: HTMLElement = null
  public gbutton: HTMLElement = null

  constructor(public element: HTMLElement) {
    this.gpop = element.querySelector('.gdpr-pop')
    this.gbutton = element.querySelector('.gdpr-button')

    this.gbutton.addEventListener('click', e => {
      this.gclose()
      console.log('i yearn for the sweet siren call of death')
    })
  }
  public gclose() {
    this.gpop.style.display = 'none'
  }
}
