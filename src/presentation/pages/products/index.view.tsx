import { Card, Checkbox, Slider, Select, Pagination, Tag, Divider, Switch, Collapse, Radio, Drawer, Button } from 'antd'
import { useState } from 'react'
import { useIsMobile } from '@/presentation/hooks/useMobile'

const { Panel } = Collapse
const { Option } = Select

type Product = {
  id: number
  name: string
  category: string
  material: string
  price: number
  isNew?: boolean
  isSale?: boolean
  image: string
}

const PAGE_SIZE = 15
const DEFAULT_IMAGE = '/images/blackjade-confident.webp'

const mockProducts: Product[] = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  name: `Jadeite Collection ${i + 1}`,
  category: i % 3 === 0 ? 'Jade' : i % 3 === 1 ? 'Jewellery' : 'Gemstones',
  material: i % 2 === 0 ? 'Imperial Jade' : 'Green Jade',
  price: 800 + i * 250,
  isNew: i < 10,
  isSale: i % 5 === 0,
  image: DEFAULT_IMAGE
}))

const ProductsView = () => {
  const isMobile = useIsMobile()

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])
  const [showOnlyNew, setShowOnlyNew] = useState(false)
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)
  const [openFilter, setOpenFilter] = useState(false)

  const filteredProducts = mockProducts
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter((p) => (showOnlyNew ? p.isNew : true))

  const pagedProducts = filteredProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const FilterContent = (
    <>
      <Collapse defaultActiveKey={['1', '2', '3']} ghost>
        <Panel header='CATEGORY' key='1'>
          <Checkbox.Group className='flex flex-col gap-2'>
            <Checkbox>Jade</Checkbox>
            <Checkbox>Jewellery</Checkbox>
            <Checkbox>Pearl</Checkbox>
            <Checkbox>Gemstones</Checkbox>
          </Checkbox.Group>
        </Panel>

        <Panel header='MATERIAL' key='2'>
          <Checkbox.Group className='flex flex-col gap-2'>
            <Checkbox>Imperial Jade</Checkbox>
            <Checkbox>Green Jade</Checkbox>
            <Checkbox>Black Jade</Checkbox>
            <Checkbox>Lavender Jade</Checkbox>
          </Checkbox.Group>
        </Panel>

        <Panel header='PRICE RANGE' key='3'>
          <Slider range max={20000} value={priceRange} onChange={(v) => setPriceRange(v as [number, number])} />
          <div className='text-xs mt-2'>
            ${priceRange[0]} – ${priceRange[1]}
          </div>
        </Panel>
      </Collapse>

      <Divider />

      <div className='flex items-center justify-between'>
        <span className='text-xs tracking-widest'>NEW PRODUCTS ONLY</span>
        <Switch checked={showOnlyNew} onChange={setShowOnlyNew} />
      </div>
    </>
  )

  return (
    <div className='grid grid-cols-12 gap-8'>
      {!isMobile && (
        <aside className='col-span-3 space-y-8'>
          <h2 className='text-sm font-bold tracking-[0.3em]'>FILTER</h2>
          {FilterContent}
        </aside>
      )}

      <section className={isMobile ? 'col-span-12' : 'col-span-9'}>
        <div className='flex flex-col gap-4 mb-6'>
          <p className='text-xs tracking-widest text-gray-500'>
            SHOWING {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filteredProducts.length)} OF{' '}
            {filteredProducts.length}
          </p>

          <div className='flex items-center gap-3 overflow-x-auto no-scrollbar'>
            {isMobile && (
              <Button className='shrink-0' onClick={() => setOpenFilter(true)}>
                Filter
              </Button>
            )}

            <div className='shrink-0'>
              <Radio.Group value={sort} onChange={(e) => setSort(e.target.value)} className='whitespace-nowrap'>
                <Radio.Button value='newest'>Newest</Radio.Button>
                <Radio.Button value='price-asc'>Price ↑</Radio.Button>
                <Radio.Button value='price-desc'>Price ↓</Radio.Button>
              </Radio.Group>
            </div>

            <Select defaultValue='grid' className='w-28 shrink-0'>
              <Option value='grid'>Grid</Option>
            </Select>
          </div>
        </div>

        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
          {pagedProducts.map((product) => (
            <Card
              key={product.id}
              hoverable
              className='border-none shadow-sm'
              cover={
                <div className='relative overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = DEFAULT_IMAGE
                    }}
                    className='h-56 sm:h-64 lg:h-72 w-full object-cover transition-transform duration-500 hover:scale-105'
                  />
                  <div className='absolute top-3 left-3 flex gap-2'>
                    {product.isNew && <Tag color='gold'>NEW</Tag>}
                    {product.isSale && <Tag color='red'>SALE</Tag>}
                  </div>
                </div>
              }
            >
              <div className='text-center space-y-1'>
                <h4 className='text-sm font-semibold'>{product.name}</h4>
                <p className='text-xs text-gray-500'>{product.material}</p>
                <p className='text-sm font-bold'>${product.price.toLocaleString()}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <Pagination
            current={page}
            pageSize={PAGE_SIZE}
            total={filteredProducts.length}
            showSizeChanger={false}
            onChange={setPage}
          />
        </div>
      </section>

      <Drawer title='Filter' placement='right' open={openFilter} onClose={() => setOpenFilter(false)} width='85%'>
        {FilterContent}
      </Drawer>
    </div>
  )
}

export default ProductsView
