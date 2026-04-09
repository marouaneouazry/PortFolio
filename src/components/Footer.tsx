'use client'

import { useState, useEffect, useRef } from 'react'

export default function Footer() {
  const prefix = 'git commit -m "'
  const message = "Ready for the next build. — Let's CONNECT."
  const fullText = prefix + message
  const [visibleChars, setVisibleChars] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setVisibleChars(0)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && visibleChars < fullText.length) {
      const timer = setTimeout(() => {
        setVisibleChars(prev => prev + 1)
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [visibleChars, fullText.length, isVisible])

  return (
    <footer
      ref={footerRef}
      style={{
        padding: '16px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 14,
            color: 'var(--cyan)',
            letterSpacing: '0.05em',
          }}
        >
          <span style={{ color: 'var(--purple)' }}>
            {prefix.slice(0, Math.min(visibleChars, prefix.length))}
          </span>
          <span style={{ color: 'var(--cyan)' }}>
            {visibleChars > prefix.length ? fullText.slice(prefix.length, visibleChars) : ''}
          </span>
          <span
            style={{
              display: visibleChars < fullText.length ? 'inline-block' : 'none',
              width: 2,
              height: 14,
              background: 'var(--cyan)',
              verticalAlign: 'middle',
              marginLeft: 2,
              animation: 'blink 1s step-end infinite',
            }}
          />
          <span style={{ color: 'var(--cyan)' }}>&quot;</span>
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}</style>
        </div>
        <div
          style={{
            fontSize: 13,
            color: 'var(--dim)',
            letterSpacing: '0.08em',
          }}
        >
          © {new Date().getFullYear()} Marouane Ouazry. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
