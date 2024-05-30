import { Home } from '../pages/Home/index.async'
import { Quotes } from '../pages/Quotes/index.async'
import { NotFound } from '../pages/NotFound/index.async'

export enum RoutePath {
  HOME = '/',
  NOTFOUND = '*',
  QUOTES = 'quotes/:id',
}

export enum QuotesLinks {
  QUOTES_A = 'quotes/0',
  QUOTES_B = 'quotes/1',
}

export interface IRoute {
  path?: string
  element: React.ComponentType | any
  index?: boolean
}

export interface ILink {
  to: string
  name: string
}

export const ROUTES: IRoute[] = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: RoutePath.NOTFOUND,
    element: <NotFound />,
  },
  {
    path: RoutePath.QUOTES,
    element: <Quotes />,
  },
]

export const LINKS: ILink[] = [
  {
    to: RoutePath.HOME,
    name: 'Home',
  },
  {
    to: QuotesLinks.QUOTES_A,
    name: 'Quotes A',
  },
  {
    to: QuotesLinks.QUOTES_B,
    name: 'Quotes B',
  },
]
