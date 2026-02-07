import { Roles } from '@/shared/permissions'

export const Constants = {
  API_TOKEN_STORAGE: 'API_APP_AT_GEMSTONES',
  API_ROLE: 'API_APP_ROLE_GEMSTONES',
  ROLES: [
    {
      label: 'Admin',
      value: Roles.ADMIN
    },
    {
      label: 'Manager',
      value: Roles.MANAGER
    },
    {
      label: 'Viewer',
      value: Roles.VIEWER
    }
  ]
}
