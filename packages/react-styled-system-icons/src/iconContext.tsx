import * as React from "react"

export interface IconContext {
  color?: string
  size?: string | number
  className?: string
  style?: React.CSSProperties
  attr?: React.SVGAttributes<SVGElement>
}

export const DefaultContext: IconContext = {
  color: undefined,
  size: 24,
  className: undefined,
  style: undefined,
  attr: undefined,
}

export const IconContext: React.Context<IconContext> =
  React.createContext && React.createContext(DefaultContext)
