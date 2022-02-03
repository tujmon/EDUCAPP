import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from 'services/api'

type SignInCredentials = {
  email: string
  password: string
}

type User = {
  email: string
  isInstructor: boolean
  name: string
  _id: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  user: User | undefined
}

type AuthProviderProps = {
  children: ReactNode
}

function parseJwt(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}
export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { token } = parseCookies()
    if (token) {
      api.get(`/users/${parseJwt(token).sub}`).then((response) => {
        console.log('response', response.data)
        const { email, isInstructor, name, _id } = response.data

        setUser({ email, isInstructor, name, _id })
        Router.push('/cadastro')
      })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    console.log(email, password)
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })
      console.log(response.data)
      const { token } = response.data
      console.log(response.data)
      setCookie(undefined, 'token', response.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // Router.push('/cadastro')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
