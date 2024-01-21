import {h, ComponentChildren} from "preact"
import {CSSProperties} from "preact/compat"
import "./classes.css"

export function Stack(props: {
  children: ComponentChildren
  style?: CSSProperties
}) {
  return (
    <div class="snug-stack" style={props.style}>
      {props.children}
    </div>
  )
}

export function Shelf(props: {
  children: ComponentChildren
  style?: CSSProperties
}) {
  return (
    <div class="snug-shelf" style={props.style}>
      {props.children}
    </div>
  )
}

function Expanse(props: {
  children?: ComponentChildren
  style?: CSSProperties
  scroll?: boolean
}) {
  return (
    <Box expand>
      <Tarp style={props.style} scroll={props.scroll}>
        {props.children}
      </Tarp>
    </Box>
  )
}

type BoxProps =
  | {
      expand: true
      clip: true
      scroll?: boolean
      children?: ComponentChildren
      style?: CSSProperties
    }
  | {
      expand: true
      clip?: false
      children?: ComponentChildren
      style?: CSSProperties
    }
  | {
      expand?: false
      children?: ComponentChildren
      style?: CSSProperties
    }

export function Box(props: BoxProps) {
  if (props.expand && props.clip) {
    return (
      <Expanse scroll={props.scroll} style={props.style}>
        {props.children}
      </Expanse>
    )
  }
  return (
    <div
      class={"snug-box" + (props.expand ? " expand" : "")}
      style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: props.expand ? 1 : 0,
        flexShrink: 0,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}

function Tarp(props: {
  children: ComponentChildren
  style?: CSSProperties
  scroll?: boolean
}) {
  const {children, style, scroll} = props
  const overflow = scroll ? "auto" : "hidden"
  return (
    <div class="snug-tarp" style={{overflow, ...style}}>
      {children}
    </div>
  )
}
