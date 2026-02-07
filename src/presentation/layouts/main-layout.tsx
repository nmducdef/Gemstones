import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '@/presentation/layouts/header'
import HeaderCommonLayout from '@/presentation/layouts/header-common'
import FooterLayout from '@/presentation/layouts/footer'

const { Content } = Layout

export type HeaderMode = 'home' | 'common'

interface MainLayoutProps {
  mode?: HeaderMode
}

const MainLayout = ({ mode = 'common' }: MainLayoutProps) => {
  const Header = mode === 'home' ? HeaderLayout : HeaderCommonLayout

  return (
    <Layout className='min-h-screen bg-white !font-acumin overflow-y-auto overflow-x-hidden custom-scroll'>
      <header className='sticky top-0 z-50 bg-white'>
        <Header />
      </header>

      <Content className='flex-1 bg-[#F7FAFD]'>
        <main className='max-w-7xl mx-auto px-6 py-8'>
          <Outlet />
        </main>
      </Content>

      <FooterLayout />
    </Layout>
  )
}

export default MainLayout
