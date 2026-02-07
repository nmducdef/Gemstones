import { useRef } from 'react'
import { Carousel } from 'antd'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useIsMobile } from '@/presentation/hooks/useMobile'

const itemsBlackJade = [
  { image: '/images/blackjade-elegant.webp', label: 'ELEGANT' },
  { image: '/images/blackjade-timeless.webp', label: 'TIMELESS' },
  { image: '/images/blackjade-confident.webp', label: 'CONFIDENT' }
]

const itemsImperialJade = [
  { image: '/images/imperialjade-01.webp' },
  { image: '/images/imperialjade-02.webp' },
  { image: '/images/imperialjade-03.webp' }
]

const itemspantheonJadeCollect = [
  { image: '/images/pantheon-collection-01.webp' },
  { image: '/images/pantheon-collection-02.webp' },
  { image: '/images/pantheon-collection-03.webp' },
  { image: '/images/pantheon-collection-04.webp' },
  { image: '/images/pantheon-collection-05.webp' },
  { image: '/images/pantheon-collection-06.webp' },
  { image: '/images/pantheon-collection-07.webp' },
  { image: '/images/pantheon-collection-08.webp' }
]

const HomeView = () => {
  const isMobile = useIsMobile()
  const carouselRef = useRef<any>(null)

  return (
    <div className='min-h-screen space-y-32'>
      <section className='max-w-[1600px] mx-auto px-6 pt-8'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12'>
          <p className='text-2xl md:text-3xl font-bold tracking-[0.25em] hover:text-[#F1DB73] transition'>
            ECLIPSE COLLECTION – BLACK JADE
          </p>

          <button className='px-10 py-3 border border-black/60 text-[12px] tracking-[0.35em] hover:bg-black hover:text-white transition'>
            DISCOVER
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {itemsBlackJade.map((item) => (
            <div key={item.label} className='group cursor-pointer'>
              <div className='relative border-2 border-black overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.label}
                  className='w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition' />
              </div>
              <p className='mt-4 text-xl font-bold tracking-[0.3em]'>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='max-w-[1600px] mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <div className='relative'>
            <img src='/images/imperialjade-main.webp' className='w-full h-[520px] object-cover' />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
              <p className='text-sm tracking-[0.3em] font-bold'>IMPERIAL JADE</p>
              <h2 className='text-3xl md:text-4xl font-bold'>KINGMAKER COLLECTION</h2>
              <p className='text-xs tracking-[0.35em] mt-2'>EMBRACE ROYALTY</p>
            </div>
          </div>

          <div className='flex flex-col items-center relative'>
            <div className='w-full max-w-sm relative'>
              <Carousel ref={carouselRef} autoplay dots={false} effect='fade'>
                {itemsImperialJade.map((item, index) => (
                  <div key={index} className='flex justify-center'>
                    <img src={item.image} className='h-[280px] object-contain mx-auto' />
                  </div>
                ))}
              </Carousel>

              {!isMobile && (
                <>
                  <button
                    onClick={() => carouselRef.current?.prev()}
                    className='absolute -left-10 top-1/2 -translate-y-1/2 p-2 border'
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => carouselRef.current?.next()}
                    className='absolute -right-10 top-1/2 -translate-y-1/2 p-2 border'
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>

            <button className='mt-12 px-10 py-3 border border-black/60 text-[12px] tracking-[0.35em] hover:bg-black hover:text-white transition'>
              DISCOVER
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='relative w-full aspect-[16/7] md:aspect-[16/7] overflow-hidden'>
          <img src='/images/pantheonjade.webp' className='w-full h-full object-cover object-[90%_center]' />

          <div className='hidden md:block absolute top-1/2 right-16 -translate-y-1/2 text-white text-right'>
            <h2 className='text-2xl lg:text-3xl font-bold tracking-wide'>PANTHEON COLLECTION</h2>
            <h3 className='text-2xl lg:text-3xl font-bold tracking-wide'>JADE CREATIONS</h3>
          </div>

          <div className='hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2'>
            <button className='px-12 py-3 border border-white text-[12px] tracking-[0.35em] hover:bg-white hover:text-black transition'>
              DISCOVER
            </button>
          </div>
        </div>

        <div className='md:hidden px-6 pt-6 text-center'>
          <h2 className='text-lg font-bold tracking-wide'>PANTHEON COLLECTION</h2>
          <h3 className='text-lg font-bold tracking-wide mb-4'>JADE CREATIONS</h3>

          <button className='px-10 py-3 border border-black text-[12px] tracking-[0.35em] hover:bg-black hover:text-white transition'>
            DISCOVER
          </button>
        </div>
      </section>

      <section className='max-w-[1600px] mx-auto px-6 pb-32'>
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-[1fr_320px]'} gap-12`}>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {itemspantheonJadeCollect.map((item, index) => (
              <div key={index} className='aspect-square overflow-hidden'>
                <img src={item.image} className='w-full h-full object-cover hover:scale-105 transition' />
              </div>
            ))}
          </div>

          <div className='flex flex-col'>
            <h3 className='text-xl font-bold mb-3'>Pantheon Collection</h3>
            <p className='text-sm text-gray-600 mb-6'>
              Eternal forms, serene and true.
              <br />A sacred glow in timeless hue.
            </p>
            <button className='px-8 py-2 border border-black/60 text-[11px] tracking-[0.35em] hover:bg-black hover:text-white transition w-fit'>
              DISCOVER
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeView
