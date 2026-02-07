const Prefix = ''

export const AppRoutes = {
  ROOT: `${Prefix}/`,
  PERMISSION_DENIED: `${Prefix}/permission-denied`,
  FORBIDDEN_ACCESS: `${Prefix}/forbidden-access`,

  PUBLIC: {
    AUTH: {
      LOGIN: `${Prefix}/login`,
      REGISTER: `${Prefix}/auth/register`,
      FORGOT_PASSWORD: `${Prefix}/auth/forgot-password`,
      RESET_PASSWORD: `${Prefix}/auth/reset-password`
    },

    ALL_PRODUCTS: '/gemstones/all-products'
  },

  PRIVATE: {
    TRANG_CHU: `${Prefix}/`
  }
}
