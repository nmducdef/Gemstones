import { AppRoutes } from '@/shared/appRoutes'

export interface MenuItem {
  key: string
  title: string
  link: string
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    key: 'about-us',
    title: 'About us',
    link: '#',
    children: []
  },
  {
    key: 'ada-q',
    title: 'ADA Q: The Jadeite Jade Passion',
    link: '#',
    children: [
      {
        key: 'the-traditional-nyonya-melaka',
        title: 'The Traditional Nyonya @ Melaka',
        link: '#'
      },
      {
        key: 'a-five-star-jadeite-affair-yangon',
        title: 'A Five Star Jadeite Affair @ Yangon',
        link: '#'
      },
      {
        key: 'urban-jadeite-jade-yangon',
        title: 'Urban Jadeite Jade @ Yangon',
        link: '#'
      },
      {
        key: 'the-road-to-shangri-la-yangon',
        title: 'The Road to Shangri-la @ Yangon',
        link: '#'
      }
    ]
  },
  {
    key: 'galleries',
    title: 'Galleries',
    link: '#',
    children: [
      {
        key: 'geomancer-manh-dai-quan-hanoi',
        title: 'Gemstones HuB Geomancer Manh Dai Quan @ Hanoi',
        link: '#'
      },
      {
        key: 'ngoc-phi-thuy-myanmar-qxa-hanoi',
        title: 'GemStones HuB Ngoc Phi Thuy Myanmar QXA @ Hanoi',
        link: '#'
      },
      {
        key: 'ngoc-dan-chau-warehouse-hanoi',
        title: 'GemStones HuB Ngoc Dan Chau – Warehouse @ Hanoi',
        link: '#'
      },
      {
        key: 'hub-hai-phong',
        title: 'GemStones HuB @ Hải Phòng',
        link: '#'
      }
    ]
  },
  {
    key: 'jade',
    title: 'Jade',
    link: '#',
    children: [
      { key: 'imperial-jade', title: 'Imperial Jade', link: '#' },
      { key: 'green-jade', title: 'Green Jade', link: '#' },
      { key: 'white-jade', title: 'White Jade', link: '#' },
      { key: 'lavendar-jade', title: 'Lavendar Jade', link: '#' },
      { key: 'eclipse-black-jade', title: 'Eclipse Collection – Black Jade', link: '#' },
      { key: 'red-yellow-jade', title: 'Red & Yellow Jade', link: '#' },
      { key: 'carbachon', title: 'Carbachon', link: '#' },
      { key: 'carving', title: 'Carving', link: '#' }
    ]
  },
  {
    key: 'jewellery',
    title: 'Jewellery',
    link: '#',
    children: [
      { key: 'bead', title: 'Bead', link: '#' },
      { key: 'bangle', title: 'Bangle', link: '#' },
      { key: 'bracelet', title: 'Bracelet', link: '#' },
      { key: 'lucky-coin', title: 'Lucky Coin', link: '#' },
      { key: 'necklace', title: 'Necklace', link: '#' },
      { key: 'pendant', title: 'Pendant', link: '#' },
      { key: 'ring', title: 'Ring', link: '#' },
      { key: 'earring', title: 'Earring', link: '#' }
    ]
  },
  {
    key: 'pearl',
    title: 'Pearl',
    link: '#',
    children: [
      { key: 'fresh-water-pearl', title: 'Fresh Water Pearl', link: '#' },
      { key: 'tahiti-pearl', title: 'Tahiti Pearl', link: '#' },
      { key: 'akoya-pearl', title: 'Akoya Pearl', link: '#' },
      { key: 'south-sea-pearl', title: 'South Sea Pearl', link: '#' }
    ]
  },
  {
    key: 'gemstones',
    title: 'Gemstones',
    link: '#',
    children: [
      {
        key: 'all-products',
        title: 'All Products',
        link: AppRoutes.PUBLIC.ALL_PRODUCTS
      },
      { key: 'blue-sapphire', title: 'Blue Sapphire', link: '#' },
      { key: 'yellow-sapphire', title: 'Yellow Sapphire', link: '#' },
      { key: 'colorless-sapphires', title: 'Colorless Sapphires', link: '#' },
      { key: 'ruby', title: 'Ruby', link: '#' },
      { key: 'spinel', title: 'Spinel', link: '#' },
      { key: 'amber', title: 'Amber', link: '#' }
    ]
  },
  {
    key: 'contact',
    title: 'Contact',
    link: '#',
    children: []
  }
]
