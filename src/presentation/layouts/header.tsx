import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import MenuLayout from '@/presentation/layouts/menu/menu'
import MenuFixedLayout from '@/presentation/layouts/menu/menu-fixed'
import MenuMobile from '@/presentation/layouts/menu/menu-mobile'
import { useIsMobile } from '@/presentation/hooks/useMobile'

const HeaderLayout = () => {
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

      <div className='relative w-full h-screen overflow-hidden'>
        <img
          src='/images/BackgroundHeader.webp'
          alt='Header Background'
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/30' />

        <header className='absolute inset-x-0 top-0 z-10'>
          <div
            className={`transition-opacity duration-300 ${
              showFixedMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            {!isMobile ? (
              <div className='flex flex-col items-center'>
                <h1 className='text-white text-3xl md:text-4xl font-bold tracking-wider pt-6 pb-1'>GEMSTONES HUB</h1>
                <MenuLayout />
              </div>
            ) : (
              <div className='flex items-center justify-between px-6 py-4'>
                <img src='/images/LogoDocument.webp' alt='Logo' className='h-10 w-auto' />
                <h1 className='text-white text-xl font-bold tracking-wider'>GEMSTONES HUB</h1>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className='text-white hover:text-[#D4AF37] transition-colors'
                >
                  {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                </button>
              </div>
            )}
          </div>
        </header>

        {isMobile && <MenuMobile open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}

        <div className='absolute inset-x-0 top-[75%] -translate-y-1/2 flex flex-col items-center text-white'>
          <h2 className='text-4xl md:text-5xl font-bold drop-shadow-2xl mb-6 tracking-wider text-center px-4'>
            TRUST THE EXPERIENCE
          </h2>
          <button className='bg-white text-black px-7 py-2.5 font-bold text-base hover:bg-gray-100 transition-colors'>
            CONTACT
          </button>
        </div>

        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
    </>
  )
}

export default HeaderLayout
