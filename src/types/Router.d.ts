interface Route {
  init(arg?: any): void
  finalize(arg?: any): void
}

interface Routes {
  [key: string]: Route
}
