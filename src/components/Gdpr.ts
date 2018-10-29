export default class Gdpr {
  private gaCookieMatch: RegExp = /_ga=|_gid|_gat/g
  public hasCookie: boolean
  constructor(public element: HTMLElement) {
    this.hasCookie = !!document.cookie.match(this.gaCookieMatch)
    if (this.hasCookie) {
      console.log('asdasd')
      this.hidePopup()
    } else if (!this.hasCookie) {
      console.log('bbbb')
      this.showPopup()
    }
  }
  injectGaScripts() {
    const gaScriptEl = document.createElement('script')
    const inlineScriptEl = document.createElement('script')

    gaScriptEl.setAttribute('async', 'async')
    gaScriptEl.src =
      'https://www.googletagmanager.com/gtag/js?id=UA-127903339-1'

    inlineScriptEl.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-127903339-1')
    `

    document.head.appendChild(gaScriptEl)
    document.head.appendChild(inlineScriptEl)
  }

  showPopup() {
    this.element.style.display = 'block'

    const agreeButton = this.element.querySelector('.gdpr-button')
    const clickListener = () => {
      this.injectGaScripts()
      agreeButton.removeEventListener('click', clickListener)
    }
    agreeButton.addEventListener('click', clickListener)
  }
  hidePopup() {
    this.element.style.display = 'none'
  }
}
