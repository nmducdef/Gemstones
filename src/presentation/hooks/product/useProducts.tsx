import { useRepository } from '@/di/RepositoriesProvider'

export const useProducts = (params?: any, enabled?: boolean) => {
  const { productRepository } = useRepository()
  const query = productRepository.getList(params, { enabled })

  return { query }
}
