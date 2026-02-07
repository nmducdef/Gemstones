import { useRepository } from '@/di/RepositoriesProvider'
import { LoginRequest } from '@/domain/models/Auth'
import LocalStorageServiceImpl from '@/infrastructure/services/LocalStorageServiceImpl'
import { Constants } from '@/shared/constants'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const localStorageService = new LocalStorageServiceImpl()
  const { authRepository } = useRepository()
  const { mutate: login, ...rest } = authRepository.login()

  return {
    login: (credentials: LoginRequest) => {
      login(credentials, {
        onSuccess: (data) => {
          if (data) {
            localStorageService.setStorage(Constants.API_TOKEN_STORAGE, data.data.accessToken)
          }
        },
        onError: (error: any) => {}
      })
    },
    ...rest
  }
}
