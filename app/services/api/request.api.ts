import { AxiosError, AxiosResponse } from "axios"
import Toast from "react-native-toast-message"
import { errorCatch } from "./error.api"

export const request = async<T>() => {
    const onSuccess = (response: AxiosResponse<T>) => response.data

    const onError = (error: AxiosError<T>) => {
        Toast.show({
            type: "error",
            text1: 'Request error',
            text2: errorCatch(error)
        })

        return Promise.reject(error)
    }
}