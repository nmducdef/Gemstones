import { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import { ProductRepository } from '@/application/repositories/ProductRepository'
import { useGetApi } from '@/infrastructure/hooks/useApi'
import { Endpoint } from '@/shared/endpoints'
import { QueryOptions } from '@/shared/types/react-query'
import { buildUrl } from '@/shared/url'

export const ProductRepositoryImpl = (): ProductRepository => ({
  getList: (params?: any, options?: QueryOptions<ResponseCommon<any>>) =>
    useGetApi<ResponseCommon<any>>({
      endpoint: Endpoint.PRODUCT.GET_ALL,
      queryParams: { ...params },
      options
    }),

  getProductById: (id: number, options?: QueryOptions<ResponseCommon<any>>) =>
    useGetApi<ResponseCommon<any>>({
      endpoint: buildUrl(Endpoint.PRODUCT.GET_BY_ID, { id }),
      options
    })
})
