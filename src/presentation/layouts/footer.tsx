import React from 'react'
import { Facebook, MessageCircle, Send } from 'lucide-react'
import OurStoryView from '@/presentation/pages/anothers/ourstory/index.view'

const FooterLayout = () => {
  return (
    <footer className='bg-[#F5F5F5] py-16 px-6'>
      <OurStoryView />
      <div className='max-w-7xl mx-auto'>
        <div className='border-t border-gray-300 mb-12'></div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <div>
            <h3 className='text-2xl font-bold mb-6'>About Us</h3>
            <p className='text-gray-600 leading-relaxed'>
              Exquisite, authentic gemstones—where timeless elegance meets profound transformation. Crafted for those
              who seek luxury, enlightenment, and the extraordinary.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-6'>Contact Us</h3>
            <p className='text-gray-600 mb-6'>
              Address: Ciputra Hanoi International City, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội, Việt Nam
            </p>

            <div className='flex gap-6'>
              <a
                href='#'
                className='w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='w-6 h-6 text-white' />
              </a>

              <a
                href='#'
                className='w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors'
                aria-label='WhatsApp'
              >
                <MessageCircle className='w-6 h-6 text-white' />
              </a>

              <a
                href='#'
                className='w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors'
                aria-label='Messenger'
              >
                <Send className='w-6 h-6 text-white' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-300 pt-8'>
          <div className='flex justify-center'>
            <img src='/images/LogoDocument.webp' alt='Logo' className='h-20 w-auto' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterLayout
