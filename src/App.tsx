import {h, ComponentChildren} from "preact"
import "./app.css"

export function App() {
  return (
    <Stack>
      <div style={{background: "#ffc"}}>
        <Stack>
          <Shelf>
            <div>
              <Stack>
                <div>foo</div>
                <div>bar</div>
              </Stack>
            </div>
            <div>kludge</div>
          </Shelf>
          <div>baz</div>
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
  const style = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "stretch",
  }

  return <div style={style}>{props.children}</div>
}

function Shelf(props: {children: ComponentChildren}) {
  const style = {
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
    alignItems: "stretch",
  }

  return <div style={style}>{props.children}</div>
}
