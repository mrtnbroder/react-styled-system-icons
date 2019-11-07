import * as React from "react"
import styled, { withTheme, DefaultTheme } from "styled-components"
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system"

export interface IconTree {
  tag: string
  attr: { [key: string]: string }
  child: IconTree[]
}

export type IconBaseProps = React.SVGAttributes<SVGElement> &
  ColorProps &
  SpaceProps &
  LayoutProps

function Tree2Element(tree: IconTree[]): React.ReactElement<{}>[] {
  return (
    tree &&
    tree.map((node, i) =>
      React.createElement(
        node.tag,
        { key: i, ...node.attr },
        Tree2Element(node.child),
      ),
    )
  )
}

export function GenIcon(data: IconTree) {
  return (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attr }} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  )
}

const svgProps = compose(
  layout,
  color,
  space,
)

const Svg = styled.svg<IconBaseProps>(svgProps)

export type IconBaseAllProps = IconBaseProps & {
  theme?: DefaultTheme
  attr?: object
  title?: string
}

export type IconType = (props: IconBaseAllProps) => JSX.Element

const _IconBase = React.forwardRef<SVGSVGElement, IconBaseAllProps>(
  ({ title, attr, children, ...props }, ref) => {
    return (
      <Svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...attr}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}>
        {title && <title>{title}</title>}
        {children}
      </Svg>
    )
  },
)

export const IconBase = withTheme(_IconBase)

IconBase.defaultProps = {
  size: 24,
}
