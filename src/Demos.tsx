import {h, Fragment, ComponentChildren} from "preact"
import {CSSProperties} from "preact/compat"

export function Demos() {
  return (
    <>
      <Demo>
        <HeaderMainFooter />
      </Demo>
      <Demo>
        <HeaderBody />
      </Demo>
    </>
  )
}

function HeaderMainFooter() {
  return (
    <Module style={{background: "lightgray"}}>
      <Stack>
        <Region>This is the header</Region>
        <Region expand>
          <Module scroll style={{background: "lightgreen"}}>
            <p>
              In this example, the header and footer are fixed to the
              top and bottom of the viewport.
            </p>
            <p>
              When the content is too big to fit on screen, this
              middle section scrolls.
            </p>
            <Expander />
          </Module>
        </Region>
        <Region>This is the footer</Region>
      </Stack>
    </Module>
  )
}

function HeaderBody() {
  return (
    <Module style={{background: "lightgray"}}>
      <Stack>
        <Region>This is the header</Region>
        <Region expand>
          <Module scroll style={{background: "lightgreen"}}>
            <Stack>
              <Region expand>
                <p>
                  In this example, the header is fixed to the top of
                  the screen. The rest of the page scrolls.
                </p>
                <p>
                  If the content is too small to occupy the entire
                  screen, the footer sticks to the bottom of the
                  viewport.
                </p>
                <Expander />
              </Region>
              <Region>
                <div style={{background: "aliceblue"}}>
                  This is the footer
                </div>
              </Region>
            </Stack>
          </Module>
        </Region>
      </Stack>
    </Module>
  )
}

function Expander() {
  return (
    <details>
      <summary>Expand me</summary>

      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </details>
  )
}

const tarp = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

function Module(props: {
  children: ComponentChildren
  style?: CSSProperties
  scroll?: boolean
}) {
  const {children, style, scroll} = props
  const overflow = scroll ? "auto" : "hidden"
  return <div style={{overflow, ...tarp, ...style}}>{children}</div>
}

function Stack(props: {children: ComponentChildren}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        ...tarp,
      }}
    >
      {props.children}
    </div>
  )
}

function Region(props: {
  children: ComponentChildren
  expand?: boolean
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: props.expand ? 1 : 0,
        flexShrink: 0,
      }}
    >
      {props.children}
    </div>
  )
}

function Demo(props: {children: ComponentChildren}) {
  const padding = 20
  const width = 400
  const height = 400
  return (
    <div style={{width, height, padding, float: "left"}}>
      <div
        style={{
          position: "relative",
          width: width - padding * 2,
          height: height - padding * 2,
          border: "2px solid red",
          overflow: "auto",
          resize: "both",
          background: "white",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
