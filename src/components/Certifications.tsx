'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { certifications } from '@/lib/data'

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <section
      id="certs"
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
            [ 05 ]
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
            Certifications
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 10,
          }}
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(3,7,18,0.6)',
                border: '1px solid rgba(0,210,255,0.2)',
                borderRadius: 8,
                padding: '14px 16px',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,210,255,0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,210,255,0.15)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,210,255,0.2)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 5,
                }}
              >
                {cert.issuer}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--purple-l)',
                  lineHeight: 1.5,
                }}
              >
                {cert.name}
              </div>
            </div>
          ))}
          <div
            style={{
              background: 'rgba(3,7,18,0.4)',
              border: '1px dashed rgba(0,210,255,0.25)',
              borderRadius: 8,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,210,255,0.5)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,210,255,0.1)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,210,255,0.25)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: 'var(--cyan)',
                fontStyle: 'italic',
              }}
            >
              and many more...
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
