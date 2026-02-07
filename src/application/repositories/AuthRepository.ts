import { ResponseCommon } from '@/application/dto/response/ResponseCommon'
import { LoginRequest, LoginResponse } from '@/domain/models/Auth'
import { usePostApi } from '@/infrastructure/hooks/useApi'

export interface AuthRepository {
  login: () => ReturnType<typeof usePostApi<LoginRequest, ResponseCommon<LoginResponse>>>
}
