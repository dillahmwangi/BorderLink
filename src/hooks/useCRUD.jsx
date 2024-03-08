import React, { useEffect } from 'react'
import { axios, catchAxiosError } from './axios'

const initState = {
  loading: false,
  error: null,
  processing: false,
}

export default function useCURD(url, many = true) {
  const [data, setData] = React.useState(many ? [] : null)
  const [state, setState] = React.useState({ ...initState, loading: !!url })

  useEffect(() => {
    if (!url) return

    setState({ ...initState, loading: true })
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setState({ ...initState })
      })
      .catch((err) => setState({ ...initState, error: catchAxiosError(err) }))
  }, [url])

  const refetch = (newURL) => {
    setState((prev) => ({ ...prev, loading: true }))
    axios
      .get(newURL || url, { cache: { override: true } })
      .then((res) => {
        setData(res.data)
        setState({ ...initState })
      })
      .catch((err) => setState({ ...initState, error: catchAxiosError(err) }))
  }

  const get = async (newURL, options = {}) => {
    return new Promise((resolve, reject) => {
      axios
        .get(newURL || url, { cache: { override: true, ...options } })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(catchAxiosError(err))
        })
    })
  }

  const post = async (url, data) => {
    setState((prev) => ({ ...prev, processing: true }))
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(catchAxiosError(err))
        })
        .finally(() => {
          setState((prev) => ({ ...prev, processing: false }))
        })
    })
  }

  const put = async (url, data) => {
    setState((prev) => ({ ...prev, processing: true }))
    return new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(catchAxiosError(err))
        })
        .finally(() => {
          setState((prev) => ({ ...prev, processing: false }))
        })
    })
  }

  const del = async (url) => {
    setState((prev) => ({ ...prev, processing: true }))
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(catchAxiosError(err))
        })
        .finally(() => {
          setState((prev) => ({ ...prev, processing: false }))
        })
    })
  }

  return { get, post, put, del, refetch, data, ...state }
}