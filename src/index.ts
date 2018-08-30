import { Router } from './utils/Router'
import { common } from './routes/common'

const routes = new Router({ common })

export const fireRouteEvents = (): void =>
  document.addEventListener('DOMContentLoaded', event => {
    routes.loadEvents()
  })
