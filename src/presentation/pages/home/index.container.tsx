import { useProducts } from '@/presentation/hooks/product/useProducts'
import HomeView from '@/presentation/pages/home/index.view'

const HomeContainer = () => {
  const { query } = useProducts()
  console.log(query.data?.data)

  return (
    <div>
      <HomeView />
    </div>
  )
}

export default HomeContainer
