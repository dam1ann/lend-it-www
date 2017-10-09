interface UserInterface {
    username: string
    email: string
    roles: Array<string>
    accessToken: string
    expiredAt: number
    refreshToken: string
}