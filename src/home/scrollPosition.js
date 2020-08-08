import { useRef, useLayoutEffect, useEffect } from 'react'
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
    if (!isBrowser) { return { x: 0, y: 0 } }
    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect()
    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
    const position = useRef(getScrollPosition({ useWindow }))

    let throttleTimeout = null
    const callback = () => {
        const currPos = getScrollPosition({ element, useWindow })
        effect({ prevPoos: position.current, currPos })
        position.current = currPos
        throttleTimeout = null
    }

    useIsomorphicLayoutEffect(() => {
        if (!isBrowser) {
            return
        }
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callback, wait)
                }
            } else {
                callback()
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            throttleTimeout && clearTimeout(throttleTimeout);
        };
    }, deps)
}

useScrollPosition.defaultProps = {
    deps: [],
    element: false,
    useWindow: false,
    wait: null,
}
