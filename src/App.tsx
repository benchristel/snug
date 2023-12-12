import {h, ComponentChildren} from "preact"
import "./stack.css"
import "./shelf.css"
import "./spring.css"
import {NarrowScreen, WideScreen} from "./screen-widths"

export function App() {
  const headerLink = {padding: "4px 12px", color: "#fff"}
  return (
    <Spring>
      <Stack>
        <Header>
          <nav>
            <Shelf wrap>
              <a style={headerLink} href="#">
                Company Name
              </a>
              <Boundary color="#aaa" />
              <a style={headerLink} href="#">
                Menu 1
              </a>
              <Boundary color="#aaa" />
              <a style={headerLink} href="#">
                Menu 2
              </a>
              <Spring />
              <a style={headerLink} href="#">
                This link is on the right
              </a>
            </Shelf>
          </nav>
        </Header>
        <Boundary color="#0ff" weight="3px" />
        <Spring>
          <Shelf>
            <div
              style={{
                background: "aliceblue",
                padding: 16,
                overflow: "auto",
              }}
            >
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>

              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
              <h1>Sidebar</h1>
            </div>
            <Boundary />
            <div
              style={{
                background: "white",
                padding: 16,
                flexGrow: 1,
                overflow: "auto",
              }}
            >
              <h1>Text</h1>
              <h1>Text</h1>
              <h1>Text</h1>
              <h1>Text</h1>
              <h1>Text</h1>
              <h1>Text</h1>
            </div>
          </Shelf>
        </Spring>
        <div style={{background: "#444", color: "#fff", padding: 8}}>
          <NarrowScreen breakpoint={600}>
            Your window is &lt;= 600px wide.
          </NarrowScreen>
          <WideScreen breakpoint={600}>
            Your window is more than 600px wide.
          </WideScreen>
        </div>
      </Stack>
    </Spring>
  )
}

function Header(props: {children: ComponentChildren}) {
  return (
    <div style={{background: "#46f", color: "white", padding: 8}}>
      {props.children}
    </div>
  )
}

function Boundary(props: {color?: string; weight?: number | string}) {
  return (
    <div
      style={{
        minWidth: props.weight ?? 1,
        minHeight: props.weight ?? 1,
        background: props.color ?? "#000",
      }}
    />
  )
}

function Spring(props: {children?: ComponentChildren}) {
  return <div class="snug-spring">{props.children}</div>
}

function Stack(props: {children: ComponentChildren}) {
  return <div class="snug-stack">{props.children}</div>
}

function Shelf(props: {children: ComponentChildren; wrap?: boolean}) {
  return (
    <div class={`snug-shelf ${props.wrap ? "wrap" : ""}`}>
      {props.children}
    </div>
  )
}
