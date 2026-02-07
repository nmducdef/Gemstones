import { Search, Menu } from 'lucide-react'
import { useIsMobile } from '@/presentation/hooks/useMobile'
import { menuItems } from '@/presentation/layouts/menu/menu-item'

interface MenuFixedLayoutProps {
  onOpenMobileMenu?: () => void
}

const MenuFixedLayout = ({ onOpenMobileMenu }: MenuFixedLayoutProps) => {
  const isMobile = useIsMobile()

  return (
    <header className='fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur border-b border-black/5'>
      <div className='max-w-[1600px] mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          <a href='/'>
            <img src='/images/LogoDocument.webp' alt='Logo' className='h-9' />
          </a>

          {!isMobile && (
            <nav className='flex items-center gap-10'>
              {menuItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0

                return (
                  <div key={item.key} className='relative group'>
                    <a
                      href={item.link}
                      className='cursor-pointer text-[12px] font-semibold uppercase
                                 tracking-[0.25em] text-[#1a1a1a]
                                 hover:text-[#D4AF37]'
                    >
                      {item.title}
                    </a>

                    {hasChildren && (
                      <div
                        className='absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72
                                   bg-[#FAFAF8] shadow-xl py-3
                                   opacity-0 invisible
                                   group-hover:opacity-100 group-hover:visible
                                   transition-all duration-300'
                      >
                        {item.children &&
                          item.children.map((child) => (
                            <a
                              key={child.key}
                              href={child.link}
                              className='block px-6 py-2 text-[11px] uppercase tracking-wide
                                       text-[#1a1a1a] hover:text-[#D4AF37]'
                            >
                              {child.title}
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          )}

          <div className='flex items-center gap-4'>
            <Search className='w-5 h-5 cursor-pointer hover:text-[#D4AF37]' />

            {isMobile && (
              <button onClick={onOpenMobileMenu}>
                <Menu className='w-6 h-6' />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default MenuFixedLayout
