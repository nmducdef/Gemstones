import { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import { AuthRepository } from '@/application/repositories/AuthRepository'
import { LoginRequest, LoginResponse } from '@/domain/models/Auth'
import { usePostApi } from '@/infrastructure/hooks/useApi'
import { Endpoint } from '@/shared/endpoints'

export const AuthRepositoryImpl = (): AuthRepository => ({
  login: () =>
    usePostApi<LoginRequest, ResponseCommon<LoginResponse>>({
      endpoint: Endpoint.AUTH.LOGIN
    })
})
