import { Router } from './utils/Router'
import { common } from './routes/common'
import { jobs } from './routes/jobs'

const routes = new Router({ common, jobs })

export const fireRouteEvents = (): void =>
  document.addEventListener('DOMContentLoaded', event => {
    routes.loadEvents()
  })
