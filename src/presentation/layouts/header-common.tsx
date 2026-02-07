import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import MenuCommonLayout from '@/presentation/layouts/menu/menu-common'
import MenuFixedLayout from '@/presentation/layouts/menu/menu-fixed'
import MenuMobile from '@/presentation/layouts/menu/menu-mobile'
import { useIsMobile } from '@/presentation/hooks/useMobile'

const HeaderCommonLayout = () => {
  const [showFixedMenu, setShowFixedMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.2
      setShowFixedMenu(window.scrollY > triggerPoint)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showFixedMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <MenuFixedLayout onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      </div>

      <header className='relative w-full'>
        <div
          className={`transition-opacity duration-300 ${
            showFixedMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {!isMobile ? (
            <MenuCommonLayout />
          ) : (
            <div className='flex items-center justify-between px-6 py-4 border-b border-black/5 bg-white'>
              <img src='/images/LogoDocument.webp' alt='Logo' className='h-10 w-auto' />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='text-black hover:text-[#D4AF37] transition-colors'
              >
                {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
              </button>
            </div>
          )}
        </div>
      </header>

      {isMobile && <MenuMobile open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}
    </>
  )
}

export default HeaderCommonLayout
