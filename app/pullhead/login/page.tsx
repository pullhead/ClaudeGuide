'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/pullhead-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      const from = searchParams.get('from') || '/pullhead'
      router.push(from)
      router.refresh()
    } else {
      setError('パスワードが正しくありません')
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '360px',
        width: '100%',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--cg-border, #e5e5e5)',
        background: 'var(--cg-bg-secondary, #f5f5f4)',
      }}
    >
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>
        Pullhead
      </h2>
      <p
        style={{
          margin: '0 0 1.5rem',
          fontSize: '0.875rem',
          color: 'var(--cg-text-muted, #78716c)',
        }}
      >
        このセクションはパスワードで保護されています
      </p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワードを入力"
        autoFocus
        style={{
          width: '100%',
          padding: '0.6rem 0.8rem',
          borderRadius: '6px',
          border: '1px solid var(--cg-border, #d6d3d1)',
          fontSize: '0.9rem',
          marginBottom: '0.75rem',
          boxSizing: 'border-box',
          background: 'var(--cg-bg, #fff)',
          color: 'inherit',
        }}
      />

      {error && (
        <p style={{ color: '#dc2626', fontSize: '0.8rem', margin: '0 0 0.75rem' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !password}
        style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '6px',
          border: 'none',
          background: 'var(--cg-accent, #d97706)',
          color: '#fff',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: loading ? 'wait' : 'pointer',
          opacity: loading || !password ? 0.6 : 1,
        }}
      >
        {loading ? '確認中...' : 'ログイン'}
      </button>
    </form>
  )
}

export default function PullheadLogin() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}
