import { Router } from './utils/Router'
import { common } from './routes/common'
import { home } from './routes/home'
import { jobs } from './routes/jobs'

const routes = new Router({ common, home, jobs })

export const fireRouteEvents = (): void =>
  document.addEventListener('DOMContentLoaded', event => {
    routes.loadEvents()
  })
