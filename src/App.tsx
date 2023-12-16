import {h, Fragment, ComponentChildren} from "preact"
import {CSSProperties} from "preact/compat"

import "./classes.css"

export function App() {
  return (
    <Snug column expand>
      <Snug
        row
        style={{background: "#444", color: "white", padding: 12}}
      >
        Header
      </Snug>
      <Snug style={{background: "aliceblue"}} expand scroll>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
      </Snug>

      <Snug
        row
        style={{background: "#444", color: "white", padding: 12}}
      >
        Footer
      </Snug>
    </Snug>
  )
}

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

function Snug(props: SnugProps) {
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
