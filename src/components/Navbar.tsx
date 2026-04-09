'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'certs', label: 'Certifications' },
    { id: 'contact', label: 'Contact Me' },
  ]

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false)
  }

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
        justifyContent: 'flex-start',
        padding: isMobile ? '12px 16px' : '18px 48px 18px 18px',
      }}
    >
      <a
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 28,
          height: 28,
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderTop: '20px solid #00d2ff',
            animation: 'chargeTriangle 2s ease-in-out infinite',
          }}
        />
      </a>

      {/* Desktop Nav */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginLeft: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {navItems.map((item) => {
              const isContact = item.id === 'contact'
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={(e) => {
                    if (isContact) {
                      e.currentTarget.style.background = 'rgba(0,210,255,0.1)'
                      e.currentTarget.style.borderColor = 'var(--cyan)'
                    } else if (active === item.id) {
                      e.currentTarget.style.color = 'var(--cyan)'
                    } else {
                      e.currentTarget.style.color = 'rgba(148, 163, 184, 0.6)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isContact) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'var(--cyan)'
                    } else if (active === item.id) {
                      e.currentTarget.style.color = 'var(--cyan)'
                    } else {
                      e.currentTarget.style.color = 'rgba(148, 163, 184, 0.4)'
                    }
                  }}
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: isContact ? 'JetBrains Mono, monospace' : 'inherit',
                    color: isContact ? 'var(--cyan)' : (active === item.id ? 'var(--cyan)' : 'rgba(148, 163, 184, 0.4)'),
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    height: 36,
                    padding: isContact ? '0 16px' : '0',
                    border: isContact ? '1px solid var(--cyan)' : 'none',
                    borderRadius: isContact ? 8 : 0,
                    background: 'transparent',
                    boxShadow: 'none',
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
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <span
            style={{
              width: 24,
              height: 2,
              background: 'var(--cyan)',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              transition: 'transform 0.3s',
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: 'var(--cyan)',
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: 'var(--cyan)',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              transition: 'transform 0.3s',
            }}
          />
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            background: 'var(--bg2)',
            borderBottom: '1px solid var(--border)',
            padding: '16px',
            zIndex: 99,
          }}
        >
          {navItems.map((item) => {
            const isContact = item.id === 'contact'
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: isContact ? 'JetBrains Mono, monospace' : 'inherit',
                  color: isContact ? 'var(--cyan)' : (active === item.id ? 'var(--cyan)' : 'rgba(148, 163, 184, 0.6)'),
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes chargeTriangle {
          0%, 100% {
            opacity: 0.6;
            filter: drop-shadow(0 0 8px rgba(0, 210, 255, 0.6));
            transform: scale(1);
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 16px rgba(0, 210, 255, 0.9));
            transform: scale(1.1);
          }
        }
      `}</style>
    </nav>
  )
}
