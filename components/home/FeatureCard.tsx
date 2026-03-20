'use client'

import React from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  href: string
  status?: 'ready' | 'wip'
}

export function FeatureCard({ icon, title, description, href, status = 'wip' }: FeatureCardProps) {
  return (
    <a
      href={href}
      className="cg-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--cg-gradient-warm)',
          opacity: 0,
          transition: 'opacity var(--cg-duration) var(--cg-ease)',
        }}
        className="cg-card-accent"
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        {/* Icon */}
        <div
          style={{
            fontSize: '1.6rem',
            lineHeight: 1,
            flexShrink: 0,
            width: '2.5rem',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            background: 'var(--cg-accent-light)',
          }}
        >
          {icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <h3
              style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--cg-text)',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h3>
            <span className={`cg-badge ${status === 'ready' ? 'cg-badge--active' : ''}`}>
              {status === 'ready' ? 'Ready' : '準備中'}
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: 'var(--cg-text-muted)',
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Hover style via CSS-in-JS — enhance the accent bar */}
      <style jsx>{`
        .cg-card:hover .cg-card-accent {
          opacity: 1;
        }
      `}</style>
    </a>
  )
}
