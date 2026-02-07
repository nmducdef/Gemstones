import { menuItems } from '@/presentation/layouts/menu/menu-item'
import { Search } from 'lucide-react'

const MenuCommonLayout = () => {
  return (
    <header className='w-full bg-white border-b border-black/10'>
      <div className='flex justify-center py-3'>
        <h1 className='text-3xl font-bold tracking-[0.35em] text-black'>GEMSTONES HUB</h1>
      </div>

      <nav className='border-t border-black/5'>
        <ul
          className='flex items-center justify-center gap-8 px-6 py-2
                     text-[13px] font-semibold tracking-[0.25em] text-[#1a1a1a]'
        >
          <li className='absolute left-12'>
            <a href='/'>
              <img src='/images/LogoDocument.webp' alt='Logo' className='h-10 w-auto' />
            </a>
          </li>

          {menuItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0

            return (
              <li key={item.key} className={`relative ${hasChildren ? 'group' : ''}`}>
                <a href={item.link} className='uppercase transition-colors duration-200 hover:text-[#D4AF37]'>
                  {item.title}
                </a>

                {hasChildren && (
                  <div
                    className='absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72
                               bg-white opacity-0 invisible
                               group-hover:opacity-100 group-hover:visible
                               transition-all duration-300 shadow-xl rounded-sm'
                  >
                    <ul className='py-3'>
                      {item.children &&
                        item.children.map((child) => (
                          <li
                            key={child.key}
                            className='px-6 py-2.5 text-[12px]
                                     uppercase tracking-wide
                                     hover:text-[#D4AF37]
                                     hover:bg-black/5 transition-colors'
                          >
                            <a href={child.link}>{child.title}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </li>
            )
          })}

          <li className='absolute right-12 cursor-pointer hover:text-[#D4AF37] transition-colors'>
            <Search className='w-4 h-4' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MenuCommonLayout
