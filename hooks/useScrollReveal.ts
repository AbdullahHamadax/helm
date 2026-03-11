'use client'
import { useEffect, useRef, useCallback } from 'react'

/**
 * Hook that applies scroll-reveal animations using IntersectionObserver.
 * Call this once per page/component — it observes all elements with
 * `.reveal`, `.reveal-left`, or `.reveal-scale` classes and adds
 * `.revealed` when they enter the viewport.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  const init = useCallback(() => {
    // Disconnect any previous observer
    observerRef.current?.disconnect()

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    if (elements.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => observerRef.current?.observe(el))
  }, [])

  useEffect(() => {
    // Small delay to ensure DOM is painted
    const t = setTimeout(init, 100)
    return () => {
      clearTimeout(t)
      observerRef.current?.disconnect()
    }
  }, [init])

  // Return reinit so pages can call it after filter changes
  return { reinit: init }
}
