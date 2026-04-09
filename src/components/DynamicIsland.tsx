'use client'

import { useState, useEffect } from 'react'

export default function DynamicIsland() {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10000,
        animation: 'islandFadeIn 0.4s ease-out',
      }}
    >
      <div
        style={{
          background: 'rgba(5,13,26,0.7)',
          border: '1px solid rgba(56,189,248,0.3)',
          borderRadius: 28,
          padding: '14px 28px',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(56,189,248,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          transition: 'box-shadow 0.1s',
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            fontWeight: 700,
            color: 'var(--cyan)',
            letterSpacing: '0.05em',
          }}
        >
          ACTIVE SESSION
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            fontWeight: 700,
            color: 'var(--text)',
            letterSpacing: '0.05em',
          }}
        >
          {formatTime(elapsed)}
        </span>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 12px #10b981, 0 0 20px #10b98180',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes islandFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
