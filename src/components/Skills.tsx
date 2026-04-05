'use client'

import { useEffect, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills, techChips } from '@/lib/data'

export default function Skills() {
  const ref = useScrollReveal(0.3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Force reflow to ensure transition triggers
            el.offsetHeight
            el.querySelectorAll<HTMLElement>('.skill-fill').forEach((bar) => {
              bar.style.width = bar.dataset.width || '0'
            })
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      style={{ borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 5 }}
    >
      <div style={{ padding: '80px 48px' }}>
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
            [ 03 ]
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
            Tech Stack &amp; Skills
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Content */}
        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
          }}
        >
          {/* Proficiency */}
          <div>
            <div
              style={{
                fontSize: 10,
                color: 'var(--cyan)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              // proficiency
            </div>

            <div ref={containerRef}>
              {skills.map((skill, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 7,
                    }}
                  >
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{skill.name}</span>
                    <span style={{ fontSize: 10, color: skill.color }}>{skill.pct}%</span>
                  </div>
                  <div
                    style={{
                      height: 2,
                      background: 'var(--border2)',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="skill-fill"
                      data-width={`${skill.pct}%`}
                      style={{
                        height: 2,
                        borderRadius: 2,
                        width: 0,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color})`,
                        transition: 'width 1s ease-out',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Chips */}
          <div>
            <div
              style={{
                fontSize: 10,
                color: 'var(--cyan)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              // full tech arsenal
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {techChips.map((chip, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10,
                    color: 'var(--dim)',
                    letterSpacing: '0.06em',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    padding: '5px 11px',
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.color = 'var(--cyan)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--dim)'
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
