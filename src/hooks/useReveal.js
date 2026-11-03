import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useRevealGroup(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const children = container.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }),
      { threshold, rootMargin: '0px 0px -30px 0px' }
    )
    children.forEach(child => observer.observe(child))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
