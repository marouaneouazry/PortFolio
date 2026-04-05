'use client'

import { useState, useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const termLines = [
  { type: 'cmd', content: '$ cat ./human.txt' },
  { type: 'out', content: "→ I'm Marouane — 24, based in Mohammedia, Morocco." },
  { type: 'dim', content: '  Engineer by training, builder by obsession.' },
  { type: 'empty' },
  { type: 'cmd', content: '$ cat ./personality.json' },
  { type: 'hi', content: '→ { curious: true, detail_oriented: true, ships_things: true }' },
  { type: 'dim', content: '  I get genuinely excited about elegant solutions.' },
  { type: 'dim', content: '  The kind that just... feel right when you read the code.' },
  { type: 'empty' },
  { type: 'cmd', content: '$ cat ./outside_of_code.txt' },
  { type: 'val', content: '→ Football, working out, movies & TV shows, music' },
  { type: 'dim', content: '  and probably debugging something that "should work".' },
  { type: 'empty' },
  { type: 'cmd', content: '$ cat ./motivation.txt' },
  { type: 'ok', content: '→ I build things because I want them to exist in the world.' },
  { type: 'dim', content: '  Not just to pass a course. Not just for a grade.' },
  { type: 'dim', content: '  To actually matter to someone using it.' },
  { type: 'cursor' },
]

function TerminalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

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
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'cmd': return 'var(--cyan)'
      case 'out': return 'var(--teal)'
      case 'val': return 'var(--green-l)'
      case 'dim': return 'var(--dim)'
      case 'hi': return 'var(--purple-l)'
      case 'ok': return 'var(--green)'
      default: return 'var(--text)'
    }
  }

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(3,7,18,0.9)',
      backdropFilter: 'blur(10px)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '96px 20px 20px',
    }}>
      <div
        ref={modalRef}
        style={{
          background: '#020810',
          border: '1px solid var(--border)',
          borderRadius: 12,
          overflow: 'hidden',
          maxWidth: 750,
          width: '100%',
          maxHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 40px rgba(0,210,255,0.2)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 18px',
            background: 'var(--bg3)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.1em', marginLeft: 6 }}>
            bash — portfolio/whoami.sh
          </span>
          <button
            onClick={onClose}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              color: 'var(--dim)',
              fontSize: 18,
              cursor: 'pointer',
              padding: '0 4px',
            }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '18px 22px 12px', fontSize: 13, lineHeight: 2, overflow: 'auto' }}>
          {termLines.slice(0, visibleLines).map((line, i) => (
            <div key={i}>
              {line.type === 'empty' ? (
                <br />
              ) : line.type === 'cursor' ? (
                <span
                  style={{
                    display: 'inline-block',
                    width: 2,
                    height: 15,
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
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default function Hero() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
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
          style={{ flex: 1 }}
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
              color: 'var(--muted)',
              maxWidth: 540,
              lineHeight: 1.9,
              margin: '24px 0 40px',
            }}
          >
            <TypeAnimation
              sequence={[
              '> get /user/marouane',
                1500,
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
            />
          </div>

          {/* CTAs */}
          <div id="cta-row" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
                color: '#fff',
                border: '1px solid rgba(0,210,255,0.3)',
                borderRadius: 8,
                padding: '13px 26px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,210,255,0.3), inset 0 0 20px rgba(0,210,255,0.1)',
              }}
            >
              ./explore_projects.sh
            </button>
            <button
              onClick={() => setIsTerminalOpen(true)}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                fontWeight: 700,
                background: 'transparent',
                color: 'var(--cyan)',
                border: '1px solid var(--border2)',
                borderRadius: 8,
                padding: '13px 26px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                backdropFilter: 'blur(10px)',
              }}
            >
              Who am I?
            </button>
            <button
              onClick={() => {
                // Add your resume file path here
                const link = document.createElement('a')
                link.href = '/resume.pdf' // Update with your actual resume file
                link.download = 'Marouane_Ouazry_Resume.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00d2ff 0%, #925fff 100%)',
                color: '#fff',
                border: '1px solid rgba(0,210,255,0.3)',
                borderRadius: 8,
                padding: '13px 26px',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(0,210,255,0.2), inset 0 0 20px rgba(146,95,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
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
          }}
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
              width: 280,
              height: 280,
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'var(--bg2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Marouane Ouazry"
              width={280}
              height={280}
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
