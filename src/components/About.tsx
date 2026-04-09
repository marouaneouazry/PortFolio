'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCounter } from '@/hooks/useCounter'

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
  { type: 'empty' },
  { type: 'cursor' },
]

function StatCard({
  target,
  label,
  color,
  gradient,
}: {
  target: number
  label: string
  color: string
  gradient: string
}) {
  const { count, ref } = useCounter(target)

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: 22,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: gradient,
        }}
      />
      <div
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: 36,
          fontWeight: 900,
          lineHeight: 1,
          color: color,
        }}
      >
        {count}+
      </div>
      <div
        style={{
          fontSize: 10,
          color: 'var(--dim)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginTop: 6,
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const ref = useScrollReveal()
  const [visibleLines, setVisibleLines] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const termRef = useRef<HTMLDivElement>(null)

  const startAnimation = () => {
    if (hasStarted) {
      // Reset and replay
      setVisibleLines(0)
      setTimeout(() => {
        let i = 0
        const interval = setInterval(() => {
          i++
          setVisibleLines(i)
          if (i >= termLines.length) clearInterval(interval)
        }, 90)
      }, 100)
    } else {
      setHasStarted(true)
      let i = 0
      const interval = setInterval(() => {
        i++
        setVisibleLines(i)
        if (i >= termLines.length) clearInterval(interval)
      }, 90)
    }
  }

  useEffect(() => {
    const el = termRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          startAnimation()
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'cmd':
        return 'var(--cyan)'
      case 'out':
        return 'var(--teal)'
      case 'val':
        return 'var(--green-l)'
      case 'dim':
        return 'var(--dim)'
      case 'hi':
        return 'var(--purple-l)'
      case 'ok':
        return 'var(--green)'
      default:
        return 'var(--text)'
    }
  }

  return (
    <section
      id="about"
      style={{ borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 5 }}
    >
      <div style={{ padding: '80px 48px' }} className="section-content">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <span style={{ fontSize: 11, color: 'var(--purple)', letterSpacing: '0.1em' }}>
            [ 04 ]
          </span>
          <span
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              color: 'var(--muted)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            About.exe
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="reveal about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
          }}
        >
          {/* Stats */}
          <div className="about-stats" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <StatCard
              target={4}
              label="Years studying Computer Science"
              color="var(--cyan)"
              gradient="linear-gradient(90deg, var(--cyan), transparent)"
            />
            <StatCard
              target={7}
              label="Major projects shipped"
              color="var(--purple-l)"
              gradient="linear-gradient(90deg, var(--purple), transparent)"
            />
            <StatCard
              target={20}
              label="Certifications earned"
              color="var(--green-l)"
              gradient="linear-gradient(90deg, var(--green), transparent)"
            />
            <StatCard
              target={30}
              label="Languages &amp; frameworks mastered"
              color="#d97706"
              gradient="linear-gradient(90deg, #d97706, transparent)"
            />
          </div>

          {/* Terminal */}
          <div
            className="about-terminal"
            style={{
              background: '#020810',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
              height: '100%',
              boxShadow: '0 0 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Bar */}
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
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: '#ef4444',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 8px #ef4444'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: '#f59e0b',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 8px #f59e0b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: '#10b981',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 8px #10b981'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--dim)',
                  letterSpacing: '0.1em',
                  marginLeft: 6,
                }}
              >
                bash — portfolio/
              </span>
              <button
                onClick={startAnimation}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  letterSpacing: '0.1em',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--purple-l)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cyan)'
                }}
              >
                whoami.sh
              </button>
            </div>

            {/* Body */}
            <div
              ref={termRef}
              style={{ padding: '22px 22px 0px', fontSize: 11, lineHeight: 1.8 }}
            >
              {termLines.slice(0, visibleLines).map((line, i) => (
                <div key={i}>
                  {line.type === 'empty' ? (
                    <br />
                  ) : line.type === 'cursor' ? (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 2,
                        height: 13,
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
            {/* Footer */}
            <div
              style={{
                padding: '12px 22px',
                borderTop: '1px solid var(--border)',
                background: 'var(--bg3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  letterSpacing: '0.1em',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                [ SYSTEM LAST UPDATED: APRIL 2026 ]
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
