import { createContext, useContext, useState } from 'react'
import { axios, catchAxiosError } from './axios'

const AuthContext = createContext({
  user: null,
  token: null,
  loading: false,
  error: null,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {}
})

export const useAuth = () => {
  const { user, loading, processing, error, signIn, signOut,signUp } =
    useContext(AuthContext)
  return { user, loading, processing, error, signIn, signOut,signUp}
}

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    processing: false,
    error: null,
    user: null,
    token: null,
  })


  const signIn = (data) => {
    setState({ ...state, processing: true, error: null })
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: '/auth/login',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          const { user, token } = res.data
          const userDataString = JSON.stringify(user)
          localStorage.setItem('user', userDataString)
          localStorage.setItem('token', res.data.token)
          setState({ ...state, processing: false, user, token })
          resolve(res.data)
        })
        .catch((err) => {
          setState({ ...state, processing: false, error: catchAxiosError(err) })
          reject(catchAxiosError(err))
        })
    })
  }

  const signUp = (data) => {
    setState({ ...state, processing: true, error: null })
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: '/auth/register',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setState({ ...state, processing: false})
          resolve(res.data)
        })
        .catch((err) => {
          setState({ ...state, processing: false, error: catchAxiosError(err) })
          reject(catchAxiosError(err))
        })
    })
  }

  const signOut = async () => {
    setState({ ...state, loading: true, error: null })
    axios({
      method: 'POST',
      url: '/logout',
    }).finally(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setState({
        ...state,
        loading: false,
        user: null,
        token: null,
      })
      window.location.href = '/auth/login'
    })
  }

  const values = { ...state, signIn, signOut,signUp }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}