import {h, ComponentChildren} from "preact"
import "./app.css"

export function App() {
  return (
    <Stack>
      <div style={{background: "#ffc"}}>
        <Stack>
          <div>foo</div>
          <div>bar</div>
        </Stack>
      </div>
      <div style={{background: "aliceblue", flexGrow: 1}}>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
      </div>
      <div style={{background: "green"}}>three</div>
    </Stack>
  )
}

function Stack(props: {children: ComponentChildren}) {
  return (
    <div
      style={{display: "flex", flexDirection: "column", flexGrow: 1}}
    >
      {props.children}
    </div>
  )
}
