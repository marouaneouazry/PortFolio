'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'experience', 'skills', 'about', 'certs', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'certs', label: 'Certifications' },
    { id: 'contact', label: 'Contact Me' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 48px',
        background: 'rgba(3,7,18,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 12,
          height: 12,
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'var(--teal)',
            animation: 'pulse 1.8s ease-in-out infinite',
          }}
        />
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ display: 'flex', gap: 32 }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onMouseEnter={(e) => {
                if (active !== item.id) {
                  e.currentTarget.style.color = 'var(--text)'
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.id) {
                  e.currentTarget.style.color = '#94a3b8'
                }
              }}
              style={{
                fontSize: 12,
                color: active === item.id ? 'var(--cyan)' : '#94a3b8',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              }}
            >
              {item.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: -3,
                  left: 0,
                  width: active === item.id ? '100%' : 0,
                  height: 1,
                  background: 'var(--cyan)',
                  transition: 'width 0.2s',
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </nav>
  )
}
