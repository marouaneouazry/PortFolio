'use client'

import { motion, type Variants } from 'framer-motion'
import { projects } from '@/lib/data'

const accentColors: Record<string, string> = {
  cyan: 'linear-gradient(180deg, var(--cyan), var(--purple))',
  orange: 'linear-gradient(180deg, var(--orange), var(--red))',
  purple: 'linear-gradient(180deg, var(--purple-l), var(--cyan))',
  green: 'linear-gradient(180deg, var(--teal), var(--green))',
  red: 'linear-gradient(180deg, var(--red), var(--orange))',
}

const tagColors: Record<string, { color: string; bg: string; border: string }> = {
  'C#': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'JavaScript': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'TypeScript': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'React.js': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'React': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'Razor Pages': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'REST API': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'ASP.NET Core': { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
  'Entity Framework': { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
  'Spring Boot': { color: 'var(--orange)', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
  'Java': { color: 'var(--orange)', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)' },
  'JavaFX': { color: 'var(--green-l)', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  'Scene Builder': { color: 'var(--cyan)', bg: 'rgba(56,189,248,0.06)', border: 'rgba(56,189,248,0.2)' },
  'Python': { color: 'var(--green-l)', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  'Django': { color: 'var(--green-l)', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  'Firebase Auth': { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
  'Firestore': { color: 'var(--green-l)', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.2)' },
  'React Native': { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
  'Expo': { color: 'var(--purple-l)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.2)' },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            [ 01 ]
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
            Selected Projects
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          {projects.map((project, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'stretch',
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'border-color 0.25s, transform 0.25s',
                background: 'var(--bg2)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'
                e.currentTarget.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              {/* Accent */}
              <div
                style={{
                  width: 3,
                  flexShrink: 0,
                  background: accentColors[project.accent] || accentColors.cyan,
                }}
              />

              {/* Body */}
              <div style={{ flex: 1, padding: '22px 24px' }}>
                {/* Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: 14,
                      fontWeight: 700,
                      color: 'var(--text)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {project.name}
                  </span>
                  <span style={{ fontSize: 16, color: 'var(--dim)', flexShrink: 0 }}>↗</span>
                </div>

                {/* Desc */}
                <p
                  style={{
                    fontSize: 11,
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                    marginBottom: 14,
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map((tag, j) => {
                    const style = tagColors[tag] || {
                      color: 'var(--muted)',
                      bg: 'var(--bg3)',
                      border: 'var(--border)',
                    }
                    return (
                      <span
                        key={j}
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
                  })}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
