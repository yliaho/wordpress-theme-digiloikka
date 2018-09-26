import { Router } from './utils/Router'
import { common } from './routes/common'
import { home } from './routes/home'
import { jobs } from './routes/jobs'
import { adagency } from './routes/adagency'

const routes = new Router({ common, home, jobs, adagency })

export const fireRouteEvents = (): void =>
  document.addEventListener('DOMContentLoaded', event => {
    routes.loadEvents()
  })
