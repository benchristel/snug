import {h, ComponentChildren} from "preact"
import "./stack.css"
import "./shelf.css"
import "./spring.css"

export function App() {
  return (
    <Spring>
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
    </Spring>
  )
}

function Spring(props: {children: ComponentChildren}) {
  return <div class="snug-spring">{props.children}</div>
}

function Stack(props: {children: ComponentChildren}) {
  return <div class="snug-stack">{props.children}</div>
}

function Shelf(props: {children: ComponentChildren}) {
  return <div class="snug-shelf">{props.children}</div>
}
