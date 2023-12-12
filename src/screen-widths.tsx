import {h, Fragment, ComponentChildren} from "preact"
import {useEffect, useState} from "preact/hooks"

export function NarrowScreen(props: {
  children: ComponentChildren
  breakpoint: number
}) {
  const width = useDocumentWidth()

  if (width <= props.breakpoint) {
    return <>{props.children}</>
  } else {
    return null
  }
}

export function WideScreen(props: {
  children: ComponentChildren
  breakpoint: number
}) {
  const width = useDocumentWidth()

  if (width > props.breakpoint) {
    return <>{props.children}</>
  } else {
    return null
  }
}

function useDocumentWidth() {
  const [width, setWidth] = useState(document.body.clientWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return width
}
