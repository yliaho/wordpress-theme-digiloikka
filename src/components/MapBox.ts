import * as mapbox from 'mapbox-gl'
import getWindowClientWidth from '../utils/getWindowClientWidth'
import breakpoints from '../utils/breakpoints'
//@ts-ignore
mapbox.accessToken =
  'pk.eyJ1IjoiZGlnaXRhbGVudHMiLCJhIjoiY2psdnp3czA4MTE5ZjNwcjZpdWlubmt1aiJ9.LLRsuThraRTWyXbY2Vt8pQ'

export default class MapBox extends mapbox.Map {
  private initialCoordinates: mapbox.LngLatLike = null
  private markerImageUrl: string = null
  public containerElement: HTMLElement = null

  constructor(private config: mapbox.MapboxOptions) {
    super({
      ...config,
      center: document
        .querySelector(`#${config.container}`)
        //@ts-ignore
        .dataset.coordinates.split(',')
        .map(numstr => parseFloat(numstr))
    })
    this.initialCoordinates = this.getCenter()
    this.markerImageUrl = this.getCanvasContainer().parentElement.dataset.markerUrl

    this.init()
  }

  private init() {
    this.scrollZoom.disable() // disable scroll zoom
    if (getWindowClientWidth() <= breakpoints.md) {
      this.dragPan.disable()
      this.touchZoomRotate.disable()
      this.doubleClickZoom.disable()
    }

    this.on('load', () => {
      this.addMarker()
    })
  }

  public addMarker() {
    this.loadImage(this.markerImageUrl, (error, image) => {
      if (error) throw new Error(error)

      this.addImage('dt-marker', image)

      this.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [
                    (this.initialCoordinates as any).lng,
                    (this.initialCoordinates as any).lat
                  ]
                }
              }
            ] as any
          }
        },
        layout: {
          'icon-image': 'dt-marker',
          'icon-size': 0.7
        } as any
      })
    })
  }
}
