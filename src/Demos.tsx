import {h, Fragment, ComponentChildren} from "preact"
import {Snug} from "./snug"

const header = {
  background: "#444",
  color: "white",
  padding: 12,
  gap: 30,
}

const aliceblue = {background: "aliceblue"}

export function Demos() {
  return (
    <>
      <Demo>
        <FixedHeaderAndFooterScrollingContent />
      </Demo>
      <Demo>
        <FixedHeaderScrollingContent />
      </Demo>
      <Demo>
        <WholePageScrollsFooterStaysAtBottom />
      </Demo>
      <Demo>
        <MultipleScrollingSections />
      </Demo>
    </>
  )
}

function FixedHeaderAndFooterScrollingContent() {
  return (
    <Snug expand>
      <Snug row style={header}>
        <div>These</div>
        <div>Elements</div>
        <div>Are</div>
        <div>In</div>
        <div>A</div>
        <div>Row</div>
      </Snug>

      <Snug scroll expand typography style={aliceblue}>
        <h1>Fixed Header and Footer, Scrolling Content</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
      </Snug>

      <Snug row style={header}>
        Footer
      </Snug>
    </Snug>
  )
}

function FixedHeaderScrollingContent() {
  return (
    <Snug expand>
      <Snug row style={header}>
        <div>These</div>
        <div>Elements</div>
        <div>Are</div>
        <div>In</div>
        <div>A</div>
        <div>Row</div>
      </Snug>

      <Snug scroll expand>
        <Snug typography expand style={aliceblue}>
          <h1>Fixed Header, Footer Stays at Bottom</h1>
          <p>
            If the content fits entirely within the viewport, the
            footer will always be at the bottom. Otherwise, the
            content and footer will scroll while the header stays at
            the top of the viewport.
          </p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </Snug>

        <Snug row style={header}>
          Footer
        </Snug>
      </Snug>
    </Snug>
  )
}

function WholePageScrollsFooterStaysAtBottom() {
  return (
    <Snug scroll expand>
      <Snug row style={header}>
        <div>These</div>
        <div>Elements</div>
        <div>Are</div>
        <div>In</div>
        <div>A</div>
        <div>Row</div>
      </Snug>

      <Snug expand>
        <Snug typography expand style={aliceblue}>
          <h1>Whole Page Scrolls, Footer Stays at Bottom</h1>
          <p>
            The whole page scrolls. If the content fits entirely
            within the viewport, the footer sticks to the bottom.
          </p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </Snug>

        <Snug row style={header}>
          Footer
        </Snug>
      </Snug>
    </Snug>
  )
}

function MultipleScrollingSections() {
  return (
    <Snug scroll expand>
      <Snug row style={header}>
        <div>These</div>
        <div>Elements</div>
        <div>Are</div>
        <div>In</div>
        <div>A</div>
        <div>Row</div>
      </Snug>

      <Snug expand style={aliceblue}>
        <h1>Multiple Scrolling Sections</h1>
        <Snug
          typography
          scroll
          style={{background: "#cfc", height: 150}}
        >
          <p>
            These (green and red) sections always stay at a fixed
            height.
          </p>
          <p>
            Since the content overflows, they will have scrollbars.
          </p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </Snug>

        <Snug
          typography
          scroll
          style={{background: "#fcc", height: 150}}
        >
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet</p>
        </Snug>
      </Snug>

      <Snug row style={header}>
        Footer
      </Snug>
    </Snug>
  )
}

function Demo(props: {children: ComponentChildren}) {
  return (
    <div style={{padding: 12, minHeight: "80vh"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 16,
          width: 600,
          height: 300,
          border: "2px solid red",
          overflow: "auto",
          resize: "both",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
