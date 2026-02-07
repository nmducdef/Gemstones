import { useRepository } from '@/di/RepositoriesProvider'

export const useGetProductById = (id: number, enabled?: boolean) => {
  const { productRepository } = useRepository()
  const query = productRepository.getProductById(id, { enabled })

  return { query }
}
