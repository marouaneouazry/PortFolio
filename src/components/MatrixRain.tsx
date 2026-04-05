'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fs = 14
    const chars = 'アイウエカキクケコ01βΩ∑∆π</>{}[]#$'.split('')
    let cols = Math.floor(canvas.width / fs)
    let drops = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(3,7,18,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fs}px JetBrains Mono,monospace`
      drops.forEach((y, i) => {
        const c = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = Math.random() > 0.9 ? '#38bdf8' : '#1e3a5f'
        ctx.fillText(c, i * fs, y * fs)
        if (y * fs > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 55)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      id="matrix-canvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.028,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
