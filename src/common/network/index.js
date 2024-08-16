import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { GlobalVar } from '../globalVar'

const timeoutError = {
  type: 'server',
  message: 'timeout',
}

const noInternetError = {
  type: 'noInternet',
  message: 'Network request failed',
  status: 400,
}

const performRequest = async (
  path,
  body,
  token = null,
  method = 'POST',
  isformData = false,
  isPortal = false,
  signal,
) => {
  let headers = {
    'Content-Type': isformData ? 'multipart/form-data' : 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  //  console.log('headers ====>', headers)
  const fullBody = { method, headers }
  if (body) {
    fullBody.body = isformData ? body : JSON.stringify(body)
  }
  if (signal) fullBody.signal = signal
  const url = [GlobalVar.APIEndpoint, path].join('/')
  const timeout = (ms, promise) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        reject(new Error('timeout'))
      }, ms)
      promise.then(resolve, reject)
    })
  }
  // console.log('%c url', 'color:green', url, fullBody)
  return timeout(1200 * 1000, fetch(url, fullBody))
    .then(async (response) => {
      const responseJson = await response.json()
      console.log('%c responseJson', 'color:green', url, responseJson)
      if (!response.status) {
        let error =
          responseJson.error ||
          (responseJson.message ? { message: responseJson.message } : { message: 'error occurred' })
        return { body: null, error }
      }
      return { body: responseJson || {}, error: null }
    })
    .catch((error) => {
      // console.log('%c responseJson error', 'color:red', error)
      if (error.message.toLowerCase() === 'network request failed') {
        return { body: null, error: noInternetError }
      } else if (error.message.toLowerCase() === 'timeout') {
        return { body: null, error: timeoutError }
      } else {
        return { body: null, error: error.message }
      }
    })
}

export default performRequest

const axiosInstance = axios.create({
  baseURL: GlobalVar.APIEndpoint,
})

const performRequestFormData = (path, body, token, method = 'POST', UploadingProgress = () => { }) => {
  const timeout = (ms, promise) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        reject(new Error('timeout'))
      }, ms)
      promise.then(resolve, reject)
    })
  }
  let typeMethod = method == 'POST' ? axiosInstance.post : axiosInstance.put
  return timeout(
    1200 * 1000,
    typeMethod(path, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'authorization': 'Bearer ' + token
      },
      onUploadProgress: (data) => {
        if (data) UploadingProgress(Math.round((100 * data.loaded) / data.total))
      },
    })
      .then(async (response) => {
        const responseJson = response.data
        //  console.log('responseJson', response)
        if (!response.status == 200) {
          let error =
            responseJson.error ||
            (responseJson.message
              ? { message: responseJson.message }
              : { message: 'error occurred' })
          return { body: null, error }
        }
        return { body: responseJson || {}, error: null }
      })
      .catch((error) => {
        console.log('%c responseJson error', 'color:red', error.response)

        if (error.message.toLowerCase() === 'network request failed') {
          return { body: null, error: noInternetError }
        } else if (error.message.toLowerCase() === 'timeout') {
          return { body: null, error: timeoutError }
        } else if (error?.response?.data?.message) {
          return { body: null, error: error?.response?.data?.message }
        }
        else {
          return { body: null, error: "unknowen Error" }

        }
      }),
  )
}

function useFetch(path, body, method = 'POST') {
  const { userData } = useSelector((s) => s.user)
  const [state, setState] = useState({
    loading: false,
    response: null,
    error: null,
  })
  useEffect(() => {
    refetch(body)
  }, [path])

  const refetch = async (body) => {
    setState({ ...state, loading: true })
    performRequest(path, body, userData?.access_token, method)
      .then((res) => {
        if (res.body) {
          setState({ ...state, loading: false, response: res.body })
        } else {
          setState({ ...state, loading: false, error: res.error })
        }
      })
      .catch((e) => {
        setState({ ...state, loading: false, error: e })
      })
  }

  return { ...state, refetch }
}

const postData = (path, body, token, method = 'POST', isformData = false) => {
  return new Promise(async (resolve, reject) => {
    performRequest(path, body, token, method, isformData)
      .then((Data) => {
        if (Data && Data.body) {
          resolve(Data.body)
        } else {
          reject(Data.error)
        }
      })
      .catch((e) => {
        // console.log('reject ====>', e)
        reject(e)
      })
  })
}

const getGooglePlacesAutoComplete = (search, latLang) => {
  return new Promise(async (resolve, reject) => {
    // let locale = 'UK'
    // if (Platform.OS == 'ios') {
    //   locale = NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    //   locale = locale?.split('_')[1] || 'UK'
    // }
    // else {
    //   const locale = NativeModules.I18nManager.localeIdentifier
    //   locale = locale?.split('_')[1] || 'UK'
    // }

    // return fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyC3wqmWgNP-u9Zv4j8-UyFGw_aeNE7y28w&input=${search}${latLang ? `&location=${latLang.latitude},${latLang.longitude}` : ''}`)

    return fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GlobalVar.locationKey}&input=${search}`,
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json)
      })
      .catch((error) => {
        reject(error)
      })
    // const locations = []
    // response.data.results.forEach((obj) => {
    //   locations.push({ value: obj.formatted_address, label: obj.formatted_address, allInfos: { address: obj.formatted_address, lat: obj.geometry.location.lat, lng: obj.geometry.location.lng } })
    // })
    // return locations
  })
}

export { useFetch, postData, getGooglePlacesAutoComplete, performRequestFormData, performRequest }
