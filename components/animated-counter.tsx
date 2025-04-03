"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
}

export default function AnimatedCounter({ value, duration = 2, className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current) return

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        animateValue()
      }
    })

    observerRef.current.observe(countRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [value])

  const animateValue = () => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(value)
      }
    }
    window.requestAnimationFrame(step)
  }

  return (
    <span ref={countRef} className={className}>
      {count}+
    </span>
  )
}

