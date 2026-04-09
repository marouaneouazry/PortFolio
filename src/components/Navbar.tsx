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
        padding: '18px 48px',
        background: 'rgba(3,7,18,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <a
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 20,
          height: 20,
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: 'var(--teal)',
            animation: 'pulse 1.8s ease-in-out infinite',
          }}
        />
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navItems.map((item) => {
            const isContact = item.id === 'contact'
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onMouseEnter={(e) => {
                  if (isContact) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,210,255,0.5), 0 0 30px rgba(146,95,255,0.3)'
                  } else if (active !== item.id) {
                    e.currentTarget.style.color = 'var(--text)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (isContact) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,210,255,0.2)'
                  } else if (active !== item.id) {
                    e.currentTarget.style.color = '#94a3b8'
                  }
                }}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: isContact ? 'JetBrains Mono, monospace' : 'inherit',
                  color: isContact ? '#fff' : (active === item.id ? 'var(--cyan)' : '#94a3b8'),
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  height: 36,
                  padding: isContact ? '0 16px' : '0',
                  border: isContact ? '1px solid rgba(0,210,255,0.3)' : 'none',
                  borderRadius: isContact ? 8 : 0,
                  background: isContact
                    ? (active === item.id
                      ? 'linear-gradient(135deg, #00d2ff 0%, #925fff 100%)'
                      : 'linear-gradient(135deg, #00d2ff 0%, #925fff 100%)')
                    : 'transparent',
                  boxShadow: isContact ? '0 0 20px rgba(0,210,255,0.2)' : 'none',
                }}
              >
                {item.label}
                {!isContact && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 6,
                      left: 0,
                      width: active === item.id ? '100%' : 0,
                      height: 1,
                      background: 'var(--cyan)',
                      transition: 'width 0.2s',
                    }}
                  />
                )}
              </a>
            )
          })}
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
