'use client'

import { techChips } from '@/lib/data'

export default function Ticker() {
  // Triple the items to ensure smooth infinite scroll
  const tripled = [...techChips, ...techChips, ...techChips]

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {tripled.map((tech, i) => (
          <div key={`${tech}-${i}`} className="ticker-item">
            <span className="ticker-dot" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}
