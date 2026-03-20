import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Claude Guide — Claude日本語学習サイト',
    template: '%s | Claude Guide'
  },
  description: 'Claudeの日本語学習リソース。認定資格、ベストプラクティス、リリースノートなど。'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Layout
          navbar={<Navbar logo={<strong>Claude Guide</strong>} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/example/claude-guide"
          footer={<Footer>MIT {new Date().getFullYear()} © Claude Guide</Footer>}
          darkMode={true}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: '目次' }}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
