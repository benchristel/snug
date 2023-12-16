import {h, ComponentChildren} from "preact"
import {CSSProperties} from "preact/compat"

import "./classes.css"

type SnugProps = {
  children?: ComponentChildren
  expand?: boolean
  scroll?: boolean
  style?: CSSProperties
} & LayoutChildrenOptions

type LayoutChildrenOptions =
  | {}
  | {
      "column": true
      "row"?: never
      "row-wrap"?: never
      "typography"?: never
    }
  | {
      "column"?: never
      "row": true
      "row-wrap"?: never
      "typography"?: never
    }
  | {
      "column"?: never
      "row"?: never
      "row-wrap": true
      "typography"?: never
    }
  | {
      "column"?: never
      "row"?: never
      "row-wrap"?: never
      "typography": true
    }

export function Snug(props: SnugProps) {
  const {scroll = false} = props

  const layoutChildren = (() => {
    if ("row" in props) {
      return "row"
    }
    if ("row-wrap" in props) {
      return "row-wrap"
    }
    if ("column" in props) {
      return "column"
    }
    if ("typography" in props) {
      return "typography"
    }
  })()

  const classes = [
    "snug",
    props.expand && "snug-expand",
    `snug-if-large-content-${scroll ? "scroll" : "stretch"}`,
    `snug-layout-children-${layoutChildren}`,
  ]

  return (
    <div
      class={classes.filter(Boolean).join(" ")}
      style={props.style}
    >
      {props.children}
    </div>
  )
}
