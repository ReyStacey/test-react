import { ReactNode } from 'react'

interface IChildren {
  children: ReactNode
}

export const Header = ({ children }: IChildren) => {
  return <header>{children}</header>
}
