import { X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { menuItems } from '@/presentation/layouts/menu/menu-item'

interface MenuMobileProps {
  open: boolean
  onClose: () => void
}

const MenuMobile = ({ open, onClose }: MenuMobileProps) => {
  const [openSub, setOpenSub] = useState<string | null>(null)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity
          ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex items-center justify-between px-6 h-16 border-b'>
          <a href='/'>
            <img src='/images/LogoDocument.webp' alt='Logo' className='h-9' />
          </a>
          <button onClick={onClose}>
            <X className='w-6 h-6' />
          </button>
        </div>

        <nav className='px-6 py-6 space-y-5'>
          {menuItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0
            const isOpen = openSub === item.key

            return (
              <div key={item.key}>
                {!hasChildren ? (
                  <a
                    href={item.link}
                    className='block text-[13px] font-medium uppercase tracking-widest
                               text-black hover:text-[#D4AF37] transition-colors'
                    onClick={onClose}
                  >
                    {item.title}
                  </a>
                ) : (
                  <>
                    <button
                      className='w-full flex items-center justify-between
                                 text-[13px] font-medium uppercase tracking-widest
                                 text-black hover:text-[#D4AF37] transition-colors'
                      onClick={() => setOpenSub(isOpen ? null : item.key)}
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300
                        ${isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}`}
                    >
                      <div className='pl-4 space-y-3'>
                        {item.children &&
                          item.children.map((child) => (
                            <a
                              key={child.key}
                              href={child.link}
                              className='block text-[12px] uppercase tracking-wide
                                       text-gray-600 hover:text-[#D4AF37]
                                       transition-colors'
                              onClick={onClose}
                            >
                              {child.title}
                            </a>
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default MenuMobile
