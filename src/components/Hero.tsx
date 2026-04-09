'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  const handleDownload = () => {
    if (isDownloading) return
    setIsDownloading(true)
    setDownloadProgress(0)

    let hasDownloaded = false

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100 && !hasDownloaded) {
          hasDownloaded = true
          clearInterval(interval)
          setTimeout(() => {
            const link = document.createElement('a')
            link.href = '/Marouane_Ouazry_Resume.pdf'
            link.download = 'Marouane_Ouazry_Resume.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            setIsDownloading(false)
            setDownloadProgress(0)
          }, 300)
          return 100
        }
        if (prev >= 100) return 100
        return prev + Math.random() * 15 + 5
      })
    }, 150)
  }

  const renderProgressBar = () => {
    const pct = Math.min(100, Math.max(0, Math.floor(downloadProgress)))
    const filled = Math.min(20, Math.floor((pct / 100) * 20))
    const empty = 20 - filled
    const bar = '█'.repeat(filled) + '░'.repeat(empty)
    return `[${bar}] ${pct}%`
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        position: 'relative',
        zIndex: 5,
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Glow blobs */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'var(--cyan)',
          top: -100,
          right: -150,
          filter: 'blur(80px)',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'var(--purple)',
          bottom: -100,
          left: '10%',
          filter: 'blur(80px)',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ flex: 1 } as React.CSSProperties}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 40, height: 1, background: 'var(--cyan)' }} />
            <span
              style={{
                fontSize: 11,
                color: 'var(--cyan)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              BASED IN MOROCCO · OPEN TO GLOBAL OPPORTUNITIES
            </span>
          </div>

          {/* Title - reduced by 25% from clamp(40px, 7vw, 80px) to clamp(30px, 5.25vw, 60px) */}
          <h1
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(30px, 5.25vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: 12,
            }}
          >
            <span style={{ display: 'block', color: 'var(--text)' }}>Marouane</span>
            <span
              style={{
                display: 'block',
                color: 'transparent',
                WebkitTextStroke: '1.5px var(--cyan)',
              }}
            >
              OUAZRY
            </span>
            <span 
              style={{ 
                display: 'block',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #E0E0E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Engineer &amp; Builder.
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontSize: 13,
              color: '#fff',
              maxWidth: 540,
              lineHeight: 1.9,
              margin: '24px 0 40px',
            }}
          >
            <TypeAnimation
              sequence={[
              '> Core: Full-Stack | AI | Data Engineering',
                2000,
              '> Transforming Complex Problems into Production-Ready Code',
                2000,
              '> Target: Challenging Opportunities',
                2000,
              '> Location: Morocco [Remote-Ready]',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              speed={20}
              deletionSpeed={80}
            />
          </div>

          {/* CTAs */}
          <div id="cta-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => setIsTerminalOpen(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,210,255,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,210,255,0.3), inset 0 0 20px rgba(0,210,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(0,210,255,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,210,255,0.15), inset 0 0 10px rgba(0,210,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(0,210,255,0.4)'
              }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                fontWeight: 700,
                background: 'transparent',
                color: 'var(--cyan)',
                border: '1px solid rgba(0,210,255,0.4)',
                borderRadius: 8,
                padding: '13px 26px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 15px rgba(0,210,255,0.15), inset 0 0 10px rgba(0,210,255,0.05)',
                transition: 'all 0.25s ease',
              }}
            >
              Who am I?
            </button>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              onMouseEnter={(e) => {
                if (!isDownloading) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,210,255,0.5), inset 0 0 25px rgba(146,95,255,0.15)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,210,255,0.2), inset 0 0 20px rgba(146,95,255,0.1)'
              }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: isDownloading ? 11 : 12,
                fontWeight: 700,
                background: isDownloading ? 'rgba(0,0,0,0.6)' : 'linear-gradient(135deg, #00d2ff 0%, #925fff 100%)',
                color: isDownloading ? '#00d2ff' : '#fff',
                border: '1px solid rgba(0,210,255,0.3)',
                borderRadius: 8,
                padding: isDownloading ? '11px 18px' : '13px 26px',
                cursor: isDownloading ? 'wait' : 'pointer',
                letterSpacing: '0.05em',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(0,210,255,0.2), inset 0 0 20px rgba(146,95,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                minWidth: isDownloading ? 220 : 'auto',
                transition: 'all 0.25s ease',
              }}
            >
              {isDownloading ? (
                <span style={{ fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre' }}>
                  {renderProgressBar()}
                </span>
              ) : (
                <>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Photo with circular mask and glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            position: 'relative',
            marginLeft: 60,
            flexShrink: 0,
          } as React.CSSProperties}
        >
          {/* Glow effect */}
          <div
            style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,210,255,0.4) 0%, rgba(124,58,237,0.2) 50%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              border: '2px solid rgba(0,210,255,0.5)',
              boxShadow: '0 0 30px rgba(0,210,255,0.3), inset 0 0 30px rgba(124,58,237,0.1)',
            }}
          />
          {/* Animated light circle border */}
          <svg
            style={{
              position: 'absolute',
              inset: -6,
              width: 'calc(100% + 12px)',
              height: 'calc(100% + 12px)',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            <defs>
              <linearGradient id="borderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d2ff" />
                <stop offset="50%" stopColor="#925fff" />
                <stop offset="100%" stopColor="#00d2ff" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              fill="none"
              stroke="url(#borderGlow)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="20 280"
              filter="url(#glow)"
              style={{
                animation: 'orbit 10s linear infinite',
                transformOrigin: 'center',
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              fill="none"
              stroke="#00d2ff"
              strokeWidth="1"
              strokeDasharray="10 290"
              opacity="0.5"
              style={{
                animation: 'orbit 15s linear infinite reverse',
                transformOrigin: 'center',
              }}
            />
          </svg>
          <style>{`
            @keyframes orbit {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <div
            style={{
              width: 350,
              height: 350,
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'var(--bg2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/profile.png"
              alt="Marouane Ouazry"
              width={350}
              height={350}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </motion.div>
      </div>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </section>
  )
}

const termLines = [
  { type: 'cmd', content: '$ cat ./me.txt' },
  { type: 'out', content: "→ I'm Marouane, 24 — a 4th-year Computer Science student" },
  { type: 'out', content: '  and aspiring Software Engineer at EMSI Casablanca.' },
  { type: 'empty' },
  { type: 'out', content: '→ Naturally curious and motivated, I enjoy tackling' },
  { type: 'out', content: '  challenges and solving complex problems through code.' },
  { type: 'out', content: '  Especially interested in new technologies, with a focus' },
  { type: 'out', content: '  on Artificial Intelligence and modern web development.' },
  { type: 'empty' },
  { type: 'out', content: '→ Always learning and building projects that combine' },
  { type: 'out', content: '  technical skills with real-world impact.' },
  { type: 'empty' },
  { type: 'out', content: '→ I build things because I want them to exist in the world.' },
  { type: 'out', content: '  Not just to pass a course. Not just for a grade.' },
  { type: 'out', content: '  To actually matter to someone using it.' },
  { type: 'empty' },
  { type: 'out', content: '→ Outside of code: gym, football, movies, TV shows,' },
  { type: 'out', content: '  and music — often finding inspiration beyond the screen.' },
  { type: 'cursor' },
]

function TerminalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setVisibleLines(0)
      let i = 0
      const interval = setInterval(() => {
        i++
        setVisibleLines(i)
        if (i >= termLines.length) clearInterval(interval)
      }, 90)
      return () => clearInterval(interval)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const getLineColor = (type: string) => {
    switch (type) {
      case 'cmd': return 'var(--cyan)'
      case 'out': return 'var(--text)'
      case 'val': return 'var(--green-l)'
      case 'dim': return 'var(--dim)'
      case 'hi': return 'var(--purple-l)'
      case 'ok': return 'var(--green)'
      default: return 'var(--text)'
    }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(3,7,18,0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 10001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#020810',
          border: '1px solid var(--border)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 600,
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
          marginTop: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 18px',
            background: 'var(--bg3)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div 
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444', transition: 'box-shadow 0.2s', cursor: 'pointer' }}
            onClick={onClose}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 8px #ef4444' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
          />
          <div 
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b', transition: 'box-shadow 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 8px #f59e0b' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
          />
          <div 
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981', transition: 'box-shadow 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 8px #10b981' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
          />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--dim)', letterSpacing: '0.1em', marginLeft: 6 }}>
            marouane@portfolio — whoami
          </span>
        </div>
        <div style={{ padding: '22px 22px 12px', fontSize: 12, lineHeight: 1.8, minHeight: 320 }}>
          {termLines.slice(0, visibleLines).map((line, i) => (
            <div key={i}>
              {line.type === 'empty' ? (
                <br />
              ) : line.type === 'cursor' ? (
                <span
                  style={{
                    display: 'inline-block',
                    width: 2,
                    height: 14,
                    background: 'var(--cyan)',
                    verticalAlign: 'middle',
                    marginLeft: 2,
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              ) : line.type === 'cmd' ? (
                <span>
                  <span style={{ color: 'var(--purple)' }}>$</span>{' '}
                  <span style={{ color: 'var(--cyan)' }}>{line.content?.slice(2) || ''}</span>
                </span>
              ) : (
                <span style={{ color: getLineColor(line.type) }}>{line.content || ''}</span>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            padding: '10px 22px',
            borderTop: '1px solid var(--border)',
            background: 'var(--bg3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--cyan)', letterSpacing: '0.1em' }}>
            Press ESC or click red button to close
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
