import { useIsMobile } from '@/presentation/hooks/useMobile'

const OurStoryView = () => {
  const isMobile = useIsMobile()

  const stories = [
    {
      image: '/images/ourstory_1.webp',
      title: 'GemStones HuB Ngoc Dan Chau – Warehouse @ Hanoi',
      description:
        'Mdm Thao used to hold a good position as a banker in a big bank. However, her passion for gemstones and jadeite led her to establish GemStones HuB, bringing precious stones from Myanmar to Vietnam.',
      category: 'IN GALLERIES',
      date: 'NOVEMBER 29, 2023'
    },
    {
      image: '/images/ourstory_2.webp',
      title: 'GemStones HuB @ Hải Phòng',
      description:
        'Mdm Nguyễn Hồng Nhung has a burning passion for mathematics and numbers as well as gemstones. She combines analytical thinking with aesthetic appreciation to curate exceptional pieces.',
      category: 'IN GALLERIES',
      date: 'NOVEMBER 26, 2023'
    },
    {
      image: '/images/ourstory_3.webp',
      title: 'GemStones HuB Ngoc Phi Thúy Myanmar QXA @ Hanoi',
      description:
        'Since young, Mdm Quý Xuân Anh has a deep passion for music. She has discovered that the beauty of jadeite resonates with her artistic soul, creating harmony between art and nature.',
      category: 'IN GALLERIES',
      date: 'NOVEMBER 22, 2023'
    },
    {
      image: '/images/ourstory_4.webp',
      title: 'GemStones HuB Geomancer Mạnh Đại Quân @ Hanoi',
      description:
        'A well-built man, sitting by the coffee shop beside his Triumph Bonneville on the pavement. His expertise in feng shui and gemstones helps clients find pieces that bring positive energy.',
      category: 'IN GALLERIES',
      date: 'JULY 31, 2019'
    },
    {
      image: '/images/ourstory_5.webp',
      title: 'The Traditional Nyonya @ Melaka',
      description:
        'Discover the vibrant heritage of Melaka through Traditional Nyonya culture, where history, architecture, and local traditions blend seamlessly with our passion for jadeite.',
      category: 'IN ADA Q',
      date: 'NOVEMBER 29, 2023'
    }
  ]

  return (
    <div className='bg-transparent max-w-7xl mx-auto !font-body'>
      <div className='border-b border-black/10 py-8'>
        <div className='max-w-[1600px] mx-auto px-6'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center tracking-[0.15em]'>OUR STORIES</h1>
        </div>
      </div>

      <div className='max-w-[1600px] mx-auto px-6 py-8'>
        <div className={`grid gap-5 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'}`}>
          {stories.map((story, index) => (
            <div key={index} className='group cursor-pointer h-full flex flex-col'>
              <div className='relative overflow-hidden aspect-[3/4] mb-6'>
                <img
                  src={story.image}
                  alt={story.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              <div className='flex flex-col flex-1'>
                <h3 className='text-[13px] md:text-[14px] font-medium leading-snug tracking-wide group-hover:text-[#D4AF37] transition-colors mb-2'>
                  {story.title}
                </h3>

                <p className='mt-1 text-[11px] md:text-[12px] text-gray-600 leading-relaxed'>{story.description}</p>

                <div className='mt-auto pt-2 border-t border-black/10'>
                  <p className='text-[9px] font-semibold tracking-widest text-gray-500'>{story.category}</p>
                  <p className='text-[9px] tracking-wide text-gray-400'>ON {story.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurStoryView
