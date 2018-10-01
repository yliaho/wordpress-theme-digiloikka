import AdVideo from '../components/AdVideo'
import AdModal from '../components/AdModal'

export const adagency: Route = {
  init() {
    const videoElements = document.querySelectorAll('.cube')
    const videoModal = new AdModal(document.querySelector('#myModal'))

    const videos = []
    for (let modalHtmlElement of Array.from(videoElements)) {
      const vidInstance = new AdVideo(modalHtmlElement as HTMLElement)
      vidInstance.onClickCallback = embed => {
        videoModal.setEmbed(embed)
      }

      videos.push(vidInstance)
    }
  },

  finalize() {}
}
