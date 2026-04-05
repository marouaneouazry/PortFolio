'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }

    let animationId: number
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.left = ringPos.current.x + 'px'
        ring.current.style.top = ringPos.current.y + 'px'
      }
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        id="cursor"
        style={{
          position: 'fixed',
          width: 10,
          height: 10,
          background: '#38bdf8',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        ref={ring}
        id="cursor-ring"
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          border: '1px solid #38bdf8',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: 0.4,
        }}
      />
    </>
  )
}
