'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
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
            link.href = '/Resume.pdf'
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
    const bar = '█'.repeat(filled) + '░'.repeat(20 - filled)
    return `[${bar}] ${pct}%`
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--border)',
        zIndex: 5,
      }}
    >
      {/* GRID FLOOR */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
        backgroundImage: 'linear-gradient(rgba(0,210,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.07) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* VERTICAL CYAN LINE */}
      <div style={{
        position: 'absolute', left: 32, bottom: '10%', height: '80%',
        width: 2, 
        background: 'linear-gradient(to top, rgba(0,210,255,0.1) 0%, rgba(0,210,255,0.8) 50%, rgba(0,210,255,0.1) 100%)',
        backgroundSize: '100% 200%',
        zIndex: 10,
        animation: 'chargeLine 2.5s linear infinite',
      }} />

      {/* PHOTO — full bleed right side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: '55%', zIndex: 2,
        }}
      >
        <Image
          src="/profile.png"
          alt="Marouane Ouazry"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 70%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 70%)',
          }}
        />
        {/* subtle cyan glow behind photo */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to left, transparent 80%, rgba(3,7,18,0.2) 100%)',
          zIndex: 1,
        }} />
      </motion.div>

      {/* MAIN CONTENT */}
      <div style={{
        position: 'relative', zIndex: 10,
        padding: '140px 64px 80px 72px',
        maxWidth: '58%',
      }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
        >
          <div style={{ width: 40, height: 1, background: '#00d2ff' }} />
          <span style={{ fontSize: 10, color: '#00d2ff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Based in Morocco · Open to global opportunities
          </span>
        </motion.div>

        {/* BIG NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}
        >
          <span style={{ display: 'block', color: '#f8fafc' }}>MAROUANE</span>
          <span style={{
            display: 'block',
            color: 'transparent',
            WebkitTextStroke: '2px #00d2ff',
            textShadow: '0 0 40px rgba(0,210,255,0.3)',
          }}>OUAZRY</span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: '#e2e8f0',
            fontWeight: 700,
            marginTop: 8,
          }}>ENGINEER &amp; BUILDER.</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: 13, color: '#64748b', margin: '20px 0 36px', fontFamily: 'JetBrains Mono, monospace' }}
        >
          <TypeAnimation
            sequence={[
              '> Core: Full-Stack | AI | Data Engineering', 2200,
              '> Transforming Complex Problems into Production-Ready Code', 2200,
              '> Target: Challenging Opportunities', 2200,
              '> Location: Morocco [Remote-Ready]', 2200,
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            speed={25}
            deletionSpeed={80}
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <button
            onClick={() => setIsTerminalOpen(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,210,255,0.1)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,210,255,0.3)'
              e.currentTarget.style.borderColor = 'rgba(0,210,255,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,210,255,0.15)'
              e.currentTarget.style.borderColor = 'rgba(0,210,255,0.4)'
            }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 12, fontWeight: 700,
              background: 'transparent', color: '#00d2ff',
              border: '1px solid rgba(0,210,255,0.4)',
              borderRadius: 8, padding: '13px 26px', cursor: 'pointer',
              letterSpacing: '0.05em',
              boxShadow: '0 0 15px rgba(0,210,255,0.15)',
              transition: 'all 0.25s ease',
            }}
          >
            Who am I?
          </button>

          <a
            href="#projects"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,210,255,0.1)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,210,255,0.3)'
              e.currentTarget.style.borderColor = 'rgba(0,210,255,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,210,255,0.15)'
              e.currentTarget.style.borderColor = 'rgba(0,210,255,0.4)'
            }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 12, fontWeight: 700,
              background: 'transparent', color: '#00d2ff',
              border: '1px solid rgba(0,210,255,0.4)',
              borderRadius: 8, padding: '13px 26px', cursor: 'pointer',
              letterSpacing: '0.05em',
              boxShadow: '0 0 15px rgba(0,210,255,0.15)',
              transition: 'all 0.25s ease',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center',
            }}
          >
            View Projects
          </a>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            onMouseEnter={(e) => { if (!isDownloading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,210,255,0.5)' } }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,210,255,0.2)' }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: isDownloading ? 11 : 12, fontWeight: 700,
              background: isDownloading ? 'rgba(0,0,0,0.6)' : 'linear-gradient(135deg, #00d2ff 0%, #925fff 100%)',
              color: isDownloading ? '#00d2ff' : '#fff',
              border: '1px solid rgba(0,210,255,0.3)',
              borderRadius: 8,
              padding: isDownloading ? '11px 18px' : '13px 26px',
              cursor: isDownloading ? 'wait' : 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
              minWidth: isDownloading ? 220 : 'auto',
              boxShadow: '0 0 20px rgba(0,210,255,0.2)',
              transition: 'all 0.25s ease',
            }}
          >
            {isDownloading ? (
              <span style={{ fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre' }}>
                {renderProgressBar()}
              </span>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes chargeLine {
          0% {
            background-position: 0% 0%;
            box-shadow: 0 0 8px rgba(0, 210, 255, 0.4);
          }
          100% {
            background-position: 0% 200%;
            box-shadow: 0 0 16px rgba(0, 210, 255, 0.8);
          }
        }
      `}</style>

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
  { type: 'out', content: '  Especially interested in AI and modern web development.' },
  { type: 'empty' },
  { type: 'out', content: '→ I build things because I want them to exist in the world.' },
  { type: 'out', content: '  Not just to pass a course. Not just for a grade.' },
  { type: 'out', content: '  To actually matter to someone using it.' },
  { type: 'empty' },
  { type: 'out', content: '→ Outside of code: gym, football, movies & TV shows,' },
  { type: 'out', content: '  music — and tinkering with side projects at 2am.' },
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
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
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

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(3,7,18,0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 10001,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#020810',
          border: '1px solid var(--border)',
          borderRadius: 12,
          width: '100%', maxWidth: 500,
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
        }}
      >
        {/* Terminal bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '12px 18px',
          background: 'var(--bg3)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div onClick={onClose} style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 8px #ef4444' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
          />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--dim)', letterSpacing: '0.1em', marginLeft: 6 }}>
            marouane@portfolio — whoami
          </span>
        </div>

        {/* Terminal body */}
        <div style={{ padding: '22px 22px 12px', fontSize: 12, lineHeight: 1.8, minHeight: 400 }}>
          {termLines.slice(0, visibleLines).map((line, i) => (
            <div key={i}>
              {line.type === 'empty' ? <br /> :
               line.type === 'cursor' ? (
                <span style={{
                  display: 'inline-block', width: 2, height: 14,
                  background: 'var(--cyan)', verticalAlign: 'middle', marginLeft: 2,
                  animation: 'blink 1s step-end infinite',
                }} />
               ) : line.type === 'cmd' ? (
                <span>
                  <span style={{ color: 'var(--purple)' }}>$</span>{' '}
                  <span style={{ color: 'var(--cyan)' }}>{line.content?.slice(2)}</span>
                </span>
               ) : (
                <span style={{ color: 'var(--text)' }}>{line.content}</span>
               )}
            </div>
          ))}
        </div>

        <div style={{
          padding: '10px 22px',
          borderTop: '1px solid var(--border)',
          background: 'var(--bg3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--cyan)', letterSpacing: '0.1em' }}>
            Press ESC or click outside to close
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </div>
  )
}