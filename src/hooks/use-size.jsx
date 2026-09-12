import * as React from "react"

/**
 * Tracks the rendered width/height of a DOM element via ResizeObserver.
 * Returns null until the first measurement lands (before first paint,
 * since the measurement runs in useLayoutEffect), then { width, height }.
 */
export function useSize(ref) {
  const [size, setSize] = React.useState(null)

  React.useLayoutEffect(() => {
    const el = ref?.current
    if (!el) return

    const measure = () => {
      const rect = el.getBoundingClientRect()
      setSize({ width: rect.width, height: rect.height })
    }

    measure()

    if (typeof ResizeObserver === "undefined") return

    const observer = new ResizeObserver(() => measure())
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return size
}
