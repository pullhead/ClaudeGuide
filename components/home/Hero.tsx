'use client'

import React from 'react'

export function Hero() {
  return (
    <section
      className="cg-mesh-bg"
      style={{
        position: 'relative',
        padding: '5rem 1.5rem 4rem',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dot overlay */}
      <div
        className="cg-dot-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: '48rem', margin: '0 auto' }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '20px',
            background: 'var(--cg-accent-light)',
            border: '1px solid var(--cg-border)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--cg-accent)',
            letterSpacing: '0.02em',
            animation: 'fadeIn 0.6s var(--cg-ease)',
          }}
        >
          <span style={{ fontSize: '1rem' }}>&#9670;</span>
          日本語で学ぶClaude
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display), system-ui, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '0 0 1.25rem',
            color: 'var(--cg-text)',
            animation: 'fadeIn 0.6s var(--cg-ease) 0.1s both',
          }}
        >
          Claude{' '}
          <span className="cg-gradient-text">Guide</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: 'var(--cg-text-secondary)',
            maxWidth: '36rem',
            margin: '0 auto 2rem',
            animation: 'fadeIn 0.6s var(--cg-ease) 0.2s both',
          }}
        >
          Claudeを使いこなすための日本語リソース。
          <br />
          認定資格、公式ガイド、ベストプラクティスを体系的にまとめています。
        </p>

      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(transparent, var(--cg-bg))',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
