'use client'

import { useEffect, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills } from '@/lib/data'

function TechChip({ name, color, borderColor }: { name: string; color: string; borderColor: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        color: 'var(--dim)',
        letterSpacing: '0.06em',
        background: 'rgba(8,15,31,0.6)',
        border: `1px solid ${borderColor}`,
        borderRadius: 4,
        padding: '5px 11px',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color
        e.currentTarget.style.color = color
        e.currentTarget.style.boxShadow = `0 0 10px ${color}40`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = borderColor
        e.currentTarget.style.color = 'var(--dim)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {name}
    </span>
  )
}

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
          className="reveal skills-grid"
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
                fontSize: 13,
                fontWeight: 700,
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
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)' }}>{skill.name}</span>
                    <span style={{ fontSize: 10, color: skill.color }}>{skill.pct}%</span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: 'rgba(255,255,255,0.08)',
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
                        boxShadow: `0 0 8px ${skill.color}`,
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
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--cyan)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              // full tech arsenal
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Languages */}
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--cyan)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  Languages
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Python','Java','C#','JavaScript','TypeScript','PHP','C / C++'].map((chip) => (
                    <TechChip key={chip} name={chip} color="var(--cyan)" borderColor="rgba(56,189,248,0.3)" />
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--purple-l)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  Frameworks
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['React.js','Angular','Node.js','Django','Spring Boot','ASP.NET Core','Symfony','React Native','Expo','Android Native'].map((chip) => (
                    <TechChip key={chip} name={chip} color="var(--purple-l)" borderColor="rgba(167,139,250,0.3)" />
                  ))}
                </div>
              </div>

              {/* Data / Cloud */}
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--green-l)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  Data / Cloud
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Hadoop','Spark','PySpark','Apache NiFi','Airflow','Hive','Iceberg','Docker','Azure','Firebase','Tableau','REST API','GraphQL','Linux','Git'].map((chip) => (
                    <TechChip key={chip} name={chip} color="var(--green-l)" borderColor="rgba(52,211,153,0.3)" />
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--orange)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  Databases
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['MySQL','PostgreSQL','MongoDB','Neo4j','Cassandra','HBase','Oracle','SQL Server'].map((chip) => (
                    <TechChip key={chip} name={chip} color="var(--orange)" borderColor="rgba(245,158,11,0.3)" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
