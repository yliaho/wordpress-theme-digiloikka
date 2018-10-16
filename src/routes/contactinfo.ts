const mapboxConfig = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  zoom: 15
}

const initializeMapBox: IntersectionObserverCallback = (entries, _observer) => {
  entries.forEach(async entry => {
    try {
      if (entry.isIntersecting) {
        const {
          default: MapBox
        } = await import(/* webpackChunkName: "mapbox" */ '../components/MapBox')

        const map = new MapBox(mapboxConfig)

        _observer.unobserve(
          document.querySelector(`#${mapboxConfig.container}`)
        )
      }
    } catch (error) {
      console.error('map box failed:', error)
    }
  })
}

export const contactinfo: Route = {
  init() {
    const mapboxObserver = new IntersectionObserver(initializeMapBox, {
      root: null,
      rootMargin: '0px'
    })

    mapboxObserver.observe(document.querySelector(`#${mapboxConfig.container}`))
  },

  finalize() {}
}
