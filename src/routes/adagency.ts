import Modal from '../components/ad-modal'

export const adagency: Route = {
  init() {
    const elements = document.querySelectorAll('.cube-grid')
    for (let modalHtmlElement of Array.from(elements)) {
      new Modal(modalHtmlElement as HTMLElement)
    }
  },

  finalize() {}
}
