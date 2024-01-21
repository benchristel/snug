import {h, ComponentChildren} from "preact"
import {CSSProperties} from "preact/compat"
import "./classes.css"

interface BasicProps {
  children?: ComponentChildren
  style?: CSSProperties
}

export function Shelf(props: BasicProps) {
  return (
    <div class="snug-shelf" style={props.style}>
      {props.children}
    </div>
  )
}

export function Box(props: BasicProps) {
  return (
    <div class="snug-box" style={props.style}>
      {props.children}
    </div>
  )
}

interface SplitProps extends BasicProps {
  inline?: boolean
}

export function Split(props: SplitProps) {
  if (Array.isArray(props.children)) {
    if (props.children.some(({type}) => type !== Region)) {
      return <div>Error: children of Split should be Regions</div>
    }
  } else {
    if ((props.children as any)?.type !== Region) {
      return <div>Error: children of Split should be Regions</div>
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: props.inline ? "row" : "column",
        alignItems: "stretch",
      }}
    >
      {props.children}
    </div>
  )
}

interface RegionProps extends BasicProps {
  expand?: boolean
}

export function Region(props: RegionProps) {
  if (!props.expand) {
    return (
      <div class="snug-region" style={props.style}>
        {props.children}
      </div>
    )
  }

  return (
    <div class="snug-region-outer" style={props.style}>
      <div class="snug-region-inner">{props.children}</div>
    </div>
  )
}

export function Spring(props: BasicProps) {
  return (
    <div class="snug-spring" style={props.style}>
      {props.children}
    </div>
  )
}
