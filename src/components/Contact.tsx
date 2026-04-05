'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const ref = useScrollReveal()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        'service_demo',
        'template_demo',
        { from_name: form.name, from_email: form.email, message: form.message },
        'public_key_demo'
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg2)',
    border: '1px solid var(--border2)',
    borderRadius: 8,
    padding: '12px 16px',
    color: 'var(--text)',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 12,
    outline: 'none',
    marginBottom: 14,
  }

  const contactLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marouaneouazry/', color: 'var(--cyan)', display: 'marouaneouazry' },
    { name: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&to=ouazry.marouane@gmail.com', color: 'var(--purple-l)', display: 'ouazry.marouane@gmail.com' },
    { name: '+212 675 373 296', url: 'tel:+212675373296', color: 'var(--green-l)' },
    { name: 'Instagram', url: 'https://instagram.com/marouaneouazry_', color: 'var(--orange)', display: 'marouaneouazry_' },
  ]

  const getIcon = (name: string) => {
    switch (name) {
      case 'LinkedIn':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      case 'Gmail':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      case '+212 675 373 296':
      case 'Phone':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      case 'Instagram':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      default:
        return null
    }
  }

  return (
    <section
      id="contact"
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
            [ 06 ]
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
            Contact
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <div 
          ref={ref} 
          className="reveal" 
          style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          {/* Left - Contact Form */}
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
              // send a message
            </div>
            <form onSubmit={submit}>
              <input
                style={inputStyle}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                style={inputStyle}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  width: '100%',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 13,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: 14,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                  ? ' Message sent!'
                  : './send_message.sh'}
              </button>
              {status === 'error' && (
                <p style={{ color: 'var(--red)', fontSize: 11, marginTop: 10 }}>
                  Something went wrong. Try again or email directly.
                </p>
              )}
            </form>
          </div>

          {/* Right - Social Links */}
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
              // connect with me
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contactLinks.map((link) => {
                const isExternal = link.url.startsWith('http')
                return isExternal ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      background: 'var(--bg2)',
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: '16px 20px',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, transform 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = link.color
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <span style={{ fontSize: 20, color: link.color }}>{getIcon(link.name)}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: link.color,
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          marginBottom: 2,
                        }}
                      >
                        {link.name}
                      </div>
                      {link.display && (
                        <div
                          style={{
                            fontSize: 10,
                            color: 'var(--dim)',
                          }}
                        >
                          {link.display}
                        </div>
                      )}
                    </div>
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.url}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      background: 'var(--bg2)',
                      border: '1px solid var(--border)',
                      borderRadius: 10,
                      padding: '16px 20px',
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, transform 0.2s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = link.color
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <span style={{ fontSize: 20, color: link.color }}>{getIcon(link.name)}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: link.color,
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          marginBottom: 2,
                        }}
                      >
                        {link.name}
                      </div>
                      {link.display && (
                        <div
                          style={{
                            fontSize: 10,
                            color: 'var(--dim)',
                          }}
                        >
                          {link.display}
                        </div>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
