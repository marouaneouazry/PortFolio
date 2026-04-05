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
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '14px 16px',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: 'var(--purple-l)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 5,
                }}
              >
                {cert.issuer}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--muted)',
                  lineHeight: 1.5,
                }}
              >
                {cert.name}
              </div>
            </div>
          ))}
          <div
            style={{
              background: 'transparent',
              border: '1px dashed var(--border2)',
              borderRadius: 8,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.2s, transform 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: 'var(--purple-l)',
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
