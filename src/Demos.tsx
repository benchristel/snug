import {h, Fragment, ComponentChildren} from "preact"
import "./classes.css"
import {Box, Region, Shelf, Split, Spring} from "./snug"

export function Demos() {
  return (
    <>
      <Demo>
        <BoxDemo />
      </Demo>
      <Demo>
        <ShelfDemo />
      </Demo>
      <Demo>
        <ShelfWrapDemo />
      </Demo>
      <Demo>
        <SplitDemo />
      </Demo>
      <Demo>
        <SplitOverflowDemo />
      </Demo>
      <Demo>
        <RegionOverflowDemo />
      </Demo>
      <Demo>
        <StickyFooterDemo />
      </Demo>
      <Demo>
        <HeaderFooterSidebarDemo />
      </Demo>
      <div style={{clear: "both", height: 400}} />
    </>
  )
}

function BoxDemo() {
  return (
    <>
      <h2>Box</h2>
      <p>A Box is a relatively positioned block element.</p>
      <p>
        Absolutely positioned descendents of a Box stick to the Box.
      </p>
      <p>
        Here is a 100px-tall Box with absolutely positioned elements
        at its corners.
      </p>
      <Box style={{height: 100, background: "lightgray"}}>
        <div style={{position: "absolute", top: 0, left: 0}}>NW</div>
        <div style={{position: "absolute", top: 0, right: 0}}>NE</div>
        <div style={{position: "absolute", bottom: 0, left: 0}}>
          SW
        </div>
        <div style={{position: "absolute", bottom: 0, right: 0}}>
          SE
        </div>
      </Box>
    </>
  )
}

function ShelfDemo() {
  return (
    <>
      <h2>Shelf and Spring</h2>
      <p>
        A Shelf puts Boxes side by side. A shelf is as wide as its
        parent, and as tall as it needs to be to contain its children.
      </p>
      <p>
        A Spring within a Shelf grows to fill any space not taken by
        its siblings.
      </p>
      <p>
        Here is a Shelf with three children. The center child is a
        Spring, and the other two are Boxes.
      </p>
      <Shelf style={{background: "lightgray"}}>
        <Box style={{background: "pink"}}>left</Box>
        <Spring style={{textAlign: "center"}}>
          <Box>top</Box>
          <Box>bottom</Box>
        </Spring>
        <Box style={{background: "cadetblue"}}>right</Box>
      </Shelf>
    </>
  )
}

function ShelfWrapDemo() {
  return (
    <>
      <h2>Shelf Wrapping</h2>
      <p>
        If the children of a Shelf don't fit in one row, they'll wrap
        to multiple rows.
      </p>
      <p>
        Each child stretches to the height of its tallest sibling in
        the same row.
      </p>
      <Shelf style={{background: "lightgray"}}>
        <Box style={{background: "pink"}}>one ...</Box>
        <Box style={{background: "lightgreen"}}>
          two ...
          <br />
          and a half
        </Box>
        <Box style={{background: "cadetblue"}}>three ...</Box>
        <Box style={{background: "pink"}}>four ...</Box>
        <Box style={{background: "lightgreen"}}>five ...</Box>
        <Box style={{background: "cadetblue"}}>six ...</Box>
        <Box style={{background: "pink"}}>seven ...</Box>
        <Box style={{background: "lightgreen"}}>eight ...</Box>
        <Box style={{background: "cadetblue"}}>nine ...</Box>
        <Box style={{background: "pink"}}>ten ...</Box>
      </Shelf>
    </>
  )
}

function SplitDemo() {
  return (
    <>
      <h2>Split</h2>
      <p>
        A Split divides a layout into regions. It is absolutely
        positioned, and entirely covers its nearest positioned
        ancestor (or the viewport, if no ancestor is positioned). A
        split can be top-bottom or left-right.
      </p>
      <p>
        Here is an 80px-tall box split into top and bottom regions.
        The bottom region is set to <code>expand</code>.
      </p>
      <p>
        The bottom region is split into left and right regions. The
        right region is set to <code>expand</code>.
      </p>

      <Box style={{height: 80}}>
        <Split>
          <Region style={{background: "pink"}}>top</Region>
          <Region expand style={{background: "lightgreen"}}>
            <Split inline>
              <Region style={{background: "aliceblue"}}>Left</Region>
              <Region expand>Right</Region>
            </Split>
          </Region>
        </Split>
      </Box>
    </>
  )
}

function SplitOverflowDemo() {
  return (
    <>
      <h2>Split Overflowing</h2>
      <p>
        If a Split doesn't have room for all its children, they simply
        overflow and are hidden.
      </p>

      <Box style={{height: 87}}>
        <Split>
          <Region style={{background: "pink"}}>one</Region>
          <Region style={{background: "lightgreen"}}>two</Region>
          <Region style={{background: "aliceblue"}}>three</Region>
          <Region style={{background: "pink"}}>four</Region>
          <Region style={{background: "lightgreen"}}>five</Region>
          <Region style={{background: "aliceblue"}}>six</Region>
        </Split>
      </Box>
    </>
  )
}

function RegionOverflowDemo() {
  return (
    <>
      <h2>Region Overflowing</h2>
      <p>
        If a region is too small to hold all its content, it scrolls.
      </p>

      <Box style={{height: 120}}>
        <Split inline>
          <Region style={{background: "pink", width: 50}}>
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
            <p>six</p>
          </Region>
          <Region expand style={{background: "lightgreen"}}>
            <p>
              Lorem ipsum dolor sit amet. If a region is too small to
              hold all its content, it scrolls. Lorem ipsum dolor sit
              amet. If a region is too small to hold all its content,
              it scrolls. Lorem ipsum dolor sit amet. If a region is
              too small to hold all its content, it scrolls. Lorem
              ipsum dolor sit amet. If a region is too small to hold
              all its content, it scrolls.
            </p>
          </Region>
        </Split>
      </Box>
    </>
  )
}

function StickyFooterDemo() {
  return (
    <>
      <h2>Region Layout</h2>
      <p>
        Regions have{" "}
        <code>display: flex; flex-direction: column</code>. Within a
        region, you can use a Spring and a Box to create a footer that
        sticks to the bottom of the Region.
      </p>

      <Box style={{height: 120}}>
        <Split inline>
          <Region style={{background: "pink", width: 50}}>
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
            <p>six</p>
          </Region>
          <Region expand style={{background: "lightgreen"}}>
            <Spring>
              <Expander />
            </Spring>
            <Box style={{background: "cadetblue"}}>
              This is the footer.
            </Box>
          </Region>
        </Split>
      </Box>
    </>
  )
}

function HeaderFooterSidebarDemo() {
  return (
    <Split>
      <Region style={{background: "#07d", color: "#fff", padding: 6}}>
        <Shelf>
          <Spring style={{flexBasis: 0}}>Logo</Spring>
          <Box>Title</Box>
          <Spring style={{flexBasis: 0, textAlign: "right"}}>
            Link Link
          </Spring>
        </Shelf>
      </Region>
      <Region expand>
        <Split inline>
          <Region
            style={{width: 100, background: "aliceblue", padding: 6}}
          >
            sidebar
          </Region>
          <Region style={{flexBasis: 1, background: "#444"}} />
          <Region expand>
            <Spring style={{padding: 6}}>
              <p>
                Finally, here is a complete example of a layout with
                header, sidebar, and footer.
              </p>
              <Expander />
            </Spring>
            <Box style={{flexBasis: 1, background: "#999"}} />
            <Box style={{background: "#ddd", padding: 6}}>
              This is the footer
            </Box>
          </Region>
        </Split>
      </Region>
    </Split>
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
