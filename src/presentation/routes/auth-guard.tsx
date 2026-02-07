import LocalStorageServiceImpl from '@/infrastructure/services/LocalStorageServiceImpl'
import { useLogin } from '@/presentation/hooks/auth/useLogin'
import { Constants } from '@/shared/constants'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthGuard = () => {
  const navigate = useNavigate()
  const { login } = useLogin()
  const [checking, setChecking] = useState(true)
  const localStorageService = new LocalStorageServiceImpl()

  useEffect(() => {
    const silentLogin = () =>
      new Promise<boolean>((resolve) => {
        login({ username: 'admin', password: '123qwe' })
      })

    const checkAuth = async () => {
      const token = localStorageService.readStorage(Constants.API_TOKEN_STORAGE)

      if (token) {
        setChecking(false)
        return
      }

      const ok = await silentLogin()

      if (!ok) {
        navigate('', { replace: true })
        return
      }

      setChecking(false)
    }

    checkAuth()
  }, [])

  if (checking) return null

  return <Outlet />
}

export default AuthGuard
