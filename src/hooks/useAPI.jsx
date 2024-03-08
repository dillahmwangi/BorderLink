import React from 'react'
import { axios, catchAxiosError } from './axios'

const initState = {
  loading: false,
  error: null,
}

export default function useAPI(url, many = true) {
  const [data, setData] = React.useState(many ? [] : null)
  const [state, setState] = React.useState({ ...initState, loading: true })

  React.useEffect(() => {
    setState({ ...initState, loading: true })
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setState({ ...initState })
      })
      .catch((err) => {
        setState({ ...initState, error: catchAxiosError(err) })
      })
  }, [url])

  const refetch = (newURL) => {
    setState({ ...initState, loading: true })
    axios
      .get(newURL || url, {
        cache: { override: true },
      })
      .then((res) => {
        setData(res.data)
        setState({ ...initState })
      })
      .catch((err) => {
        setState({ ...initState, error: catchAxiosError(err) })
      })
  }

  state.refetch = refetch

  return [data, { loading: state.loading, error: state.error, refetch }]
}