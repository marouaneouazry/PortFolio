'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const tagColors: Record<string, { color: string; bg: string; border: string }> = {
  Hadoop: { color: 'var(--orange)', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
  HDFS: { color: 'var(--orange)', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
  Spark: { color: '#f87171', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.2)' },
  PySpark: { color: '#f87171', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.2)' },
  NiFi: { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  Airflow: { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  Hive: { color: 'var(--green-l)', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  Iceberg: { color: 'var(--green-l)', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  Docker: { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
  Tableau: { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
}

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section
      id="experience"
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
            [ 02 ]
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
            Professional Experience
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Card */}
        <div ref={ref} className="reveal">
          <div
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top gradient line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(90deg, var(--cyan), var(--purple), var(--green))',
              }}
            />

            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 16,
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 4,
                  }}
                >
                  Big Data Engineer Intern
                </div>
                <div style={{ fontSize: 11, color: 'var(--cyan)' }}>
                  Eurafric Information — Green City, Bouskoura, Casablanca
                </div>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#fff',
                  letterSpacing: '0.1em',
                  background: 'var(--border)',
                  padding: '4px 10px',
                  borderRadius: 4,
                }}
              >
                AUG – SEP 2025
              </div>
            </div>

            {/* Project */}
            <a
              href="https://github.com/marouaneouazry/Big-Data-Pipeline"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                color: 'var(--purple-l)',
                fontWeight: 700,
                marginBottom: 12,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--cyan)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--purple-l)'
              }}
            >
              Multi-Layer Big Data Pipeline — LakeHouse Management (Medallion Architecture) ↗
            </a>

            {/* Bullets */}
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 20,
              }}
            >
              {[
                'Ingested financial data (bank accounts) and automated flows with Apache NiFi into HDFS',
                'Transformed and enriched data using PySpark across Bronze → Silver → Gold layers in Parquet format',
                'Orchestrated the full pipeline with Airflow; managed data catalog via Hive & Iceberg',
                'Delivered analytical dashboards in Tableau to support BI and data-driven decisions',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 11,
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    paddingLeft: 18,
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--cyan)',
                      fontSize: 10,
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Hadoop', 'HDFS', 'Spark', 'PySpark', 'NiFi', 'Airflow', 'Hive', 'Iceberg', 'Docker', 'Tableau'].map(
                (tag) => {
                  const style = tagColors[tag] || {
                    color: 'var(--muted)',
                    bg: 'var(--bg3)',
                    border: 'var(--border)',
                  }
                  return (
                    <span
                      key={tag}
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.05em',
                        borderRadius: 4,
                        padding: '3px 9px',
                        border: `1px solid ${style.border}`,
                        color: style.color,
                        background: style.bg,
                      }}
                    >
                      {tag}
                    </span>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
