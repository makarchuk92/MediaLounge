import { EnumAsyncStorage, IAuthResponse } from "@/types/auth.interface"
import { request } from "../api/request.api"
import { getAuthUrl } from "@/config/api.config"
import { deleteTokensStorage, saveToStorage } from "./auth.helper"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthService = {
    async main(variant: 'reg' | 'login', email: string, password: string) {
        const response = await request<IAuthResponse>({
            url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
            method: 'POST',
            data: { email, password }
        })

        if (response.accessToken) await saveToStorage(response)
        return response
    },
    async logout() {
        await deleteTokensStorage()
        await AsyncStorage.removeItem(EnumAsyncStorage.USER)
    }
}