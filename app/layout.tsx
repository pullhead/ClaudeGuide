import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Outfit, Source_Sans_3 } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'

const displayFont = Outfit({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const bodyFont = Source_Sans_3({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata = {
  title: {
    default: 'Claude Guide — Claude日本語学習サイト',
    template: '%s | Claude Guide',
  },
  description:
    'Claudeの日本語学習リソース。認定資格、ベストプラクティス、リリースノートなど。',
}

const logo = (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 700,
      fontSize: '1.05rem',
      letterSpacing: '-0.02em',
    }}
  >
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.6rem',
        height: '1.6rem',
        borderRadius: '6px',
        background: 'var(--cg-gradient-warm)',
        color: '#fff',
        fontSize: '0.85rem',
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      C
    </span>
    <span>
      Claude{' '}
      <span className="cg-gradient-text">Guide</span>
    </span>
  </span>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <Head
        faviconGlyph="◆"
        color={{ hue: 38, saturation: 92 }}
        backgroundColor={{ dark: '#1c1917', light: '#fafaf9' }}
      />
      <body style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        <Layout
          navbar={
            <Navbar
              logo={logo}
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pullhead/ClaudeGuide"
          footer={
            <Footer>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--cg-text-muted)' }}>
                  MIT {new Date().getFullYear()} &copy; Claude Guide
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--cg-text-muted)',
                    opacity: 0.7,
                  }}
                >
                  Powered by Nextra &middot; Built with Claude
                </span>
              </div>
            </Footer>
          }
          darkMode={true}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: '目次' }}
          editLink={null}
          feedback={{ content: null }}
          copyPageButton={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
