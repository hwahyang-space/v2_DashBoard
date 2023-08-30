import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    setAccessToken: (accessToken: string) => void
    setRefreshToken: (refreshToken: string) => void
    removeAll: () => void
  }
}