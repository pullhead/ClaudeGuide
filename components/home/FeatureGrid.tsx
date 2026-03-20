import React from 'react'
import { FeatureCard } from './FeatureCard'

const features = [
  {
    icon: '🎓',
    title: '認定資格 (CCA Foundations)',
    description: 'Claude Certified Associate試験の対策ガイド。5つのドメインを網羅的に解説し、シナリオ問題やアンチパターンも収録。',
    href: '/certified',
    status: 'ready' as const,
  },
  {
    icon: '📖',
    title: '公式ガイド',
    description: 'Anthropic公式ドキュメントの日本語要約。モデル、API、プロンプトエンジニアリングなど。',
    href: '/official-guide',
    status: 'ready' as const,
  },
  {
    icon: '💻',
    title: 'Everything Claude Code',
    description: 'Claude Codeの全機能ガイド。CLAUDE.md、Hooks、CI/CD連携、サブエージェントなど。',
    href: '/everything-claude-code',
    status: 'ready' as const,
  },
  {
    icon: '✅',
    title: 'Best Practice',
    description: 'Claude活用のベストプラクティス集。ワークフロー、スキル、設定の実践ガイド。',
    href: '/best-practice',
    status: 'ready' as const,
  },
  {
    icon: '🔗',
    title: 'Pullhead',
    description: 'Pullheadナレッジベース。',
    href: '/pullhead',
    status: 'wip' as const,
  },
  {
    icon: '📝',
    title: 'リリースノート',
    description: 'Claudeのアップデート情報・変更履歴。',
    href: '/release-notes',
    status: 'wip' as const,
  },
]

export function FeatureGrid() {
  return (
    <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '56rem', margin: '0 auto' }}>
      {/* Section heading */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: '1.6rem',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: 'var(--cg-text)',
            margin: '0 0 0.5rem',
            border: 'none',
            paddingLeft: 0,
          }}
        >
          コンテンツ
        </h2>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--cg-text-muted)',
            margin: 0,
          }}
        >
          各セクションの学習リソースにアクセス
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 24rem), 1fr))',
          gap: '1rem',
        }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.href} {...feature} />
        ))}
      </div>
    </section>
  )
}
