import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let current = 0
    const step = target / (duration / 16)
    const interval = setInterval(() => {
      current += step
      if (current < target) {
        setCount(Math.floor(current))
      } else {
        setCount(target)
        clearInterval(interval)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [started, target, duration])

  return { ref, count }
}
