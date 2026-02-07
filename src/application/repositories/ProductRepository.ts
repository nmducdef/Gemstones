import { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import { useGetApi } from '@/infrastructure/hooks/useApi'
import { QueryOptions } from '@/shared/types/react-query'

export interface ProductRepository {
  getList: (
    params?: any,
    options?: QueryOptions<ResponseCommon<any>>
  ) => ReturnType<typeof useGetApi<ResponseCommon<any>>>

  getProductById: (
    id: number,
    options?: QueryOptions<ResponseCommon<any>>
  ) => ReturnType<typeof useGetApi<ResponseCommon<any>>>
}
