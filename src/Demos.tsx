import {h, Fragment, ComponentChildren} from "preact"
import {CSSProperties} from "preact/compat"
import "./classes.css"
import {Box, Shelf, Stack} from "./snug"

export function Demos() {
  return (
    <>
      <Demo>
        <HeaderMainFooter />
      </Demo>
      <Demo>
        <HeaderBody />
      </Demo>
      <Demo>
        <Sidebar />
      </Demo>
      <Demo>
        <MenuBar />
      </Demo>
    </>
  )
}

function HeaderMainFooter() {
  return (
    <Stack style={{background: "lightgray"}}>
      <Box>This is the header</Box>
      <Box expand clip scroll style={{background: "lightgreen"}}>
        <p>
          In this example, the header and footer are fixed to the top
          and bottom of the viewport.
        </p>
        <p>
          When the content is too big to fit on screen, this middle
          section scrolls.
        </p>
        <Expander />
      </Box>
      <Box>This is the footer</Box>
    </Stack>
  )
}

function HeaderBody() {
  return (
    <Stack style={{background: "lightgray"}}>
      <Box>This is the header</Box>
      <Box expand clip scroll style={{background: "lightgreen"}}>
        <Stack>
          <Box expand>
            <p>
              In this example, the header is fixed to the top of the
              screen. The rest of the page scrolls.
            </p>
            <p>
              If the content is too small to occupy the entire screen,
              the footer sticks to the bottom of the viewport.
            </p>
            <Expander />
          </Box>
          <Box>
            <div style={{background: "aliceblue"}}>
              This is the footer
            </div>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

function Sidebar() {
  return (
    <Stack style={{background: "lightgray"}}>
      <Box>This is the header</Box>
      <Box expand style={{background: "lightgreen"}}>
        <Shelf>
          <Box style={{inlineSize: 100}}>100px wide sidebar</Box>
          <Box expand clip scroll style={{background: "aliceblue"}}>
            <p>
              In this example, the content scrolls while the sidebar
              and header remain fixed.
            </p>
            <Expander />
          </Box>
        </Shelf>
      </Box>
    </Stack>
  )
}

function MenuBar() {
  return (
    <Stack style={{background: "lightgray"}}>
      <Box>
        <Shelf>
          <Box expand clip style={{background: "#fcc"}}>
            Left
          </Box>
          <Box style={{background: "#afa"}}>Center</Box>
          <Box
            expand
            clip
            style={{background: "#cdf", textAlign: "right"}}
          >
            Right --------
          </Box>
        </Shelf>
      </Box>
      <Box expand style={{background: "lightgreen"}}></Box>
    </Stack>
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
