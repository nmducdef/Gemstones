export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  user: {
    userId: number
    username: string
    fullName: string
    role: string
    agencyId: null
  }
}
