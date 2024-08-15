import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'
import { IContext, TypeUserState } from './auth-provider.interface'
import * as SplashScreen from 'expo-splash-screen'


export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null)

  useEffect(() => {
    let mounted = true

    const checkAccessToken = async () => {
      try {

      } catch {

      } finally {
        await SplashScreen.hideAsync()
      }
    }

    checkAccessToken()

    return () => {
      mounted = false
    }

  }, [])

  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>

}

export default AuthProvider