import { useAuth } from "@/hooks/useAuth"
import { getNewTokens } from "@/services/api/helper.auth"
import { getAccessToken } from "@/services/auth/auth.helper"
import { AuthService } from "@/services/auth/auth.service"
import { EnumSecureStore } from "@/types/auth.interface"
import { getItemAsync } from "expo-secure-store"
import { useEffect } from "react"

export const useCheckAuth = (routeName?: string) => {
    const { user, setUser } = useAuth()

    useEffect(() => {
        const checkAccessToken = async () => {
            const accessToken = await getAccessToken()
            if (accessToken) {
                try {
                    await getNewTokens()
                } catch (error) {
                    await AuthService.logout()
                    setUser(null)
                }
            }
        }
    }, [])

    useEffect(() => {
        const checkRefreshToken = async () => {
            const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
            if (!refreshToken && user) {
                await AuthService.logout()
                setUser(null)
            }
        }
    }, [routeName])


}