import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { camelizeKeys, decamelizeKeys } from 'humps'
import qs from 'qs'
import { apiUrl } from '../config'

function useAxiosErrors(error: AxiosError) {
  if (error?.response?.status === 401) {
    window.location.href = `/`
    return null
  }
  throw error
}

function defaultTransformers<T>(transformRequest: T) {
  if (!transformRequest) {
    return []
  }
  if (transformRequest instanceof Array) {
    return transformRequest
  }
  return [transformRequest]
}

type TransformRequest = typeof axios.defaults.transformRequest
type TransformResponse = typeof axios.defaults.transformResponse

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  timeout: 1000,
  transformRequest: [
    (data) => {
      if (data instanceof FormData) {
        return data
      }
      return decamelizeKeys(data)
    },
    ...defaultTransformers<TransformRequest>(axios.defaults.transformRequest),
  ],
  transformResponse: [
    ...defaultTransformers<TransformResponse>(axios.defaults.transformResponse),
    (data) => camelizeKeys(data),
  ],
  paramsSerializer: {
    serialize: (params) =>
      qs.stringify(decamelizeKeys(params), {
        skipNulls: true,
      })
  },
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.response.use((response) => response, useAxiosErrors)

function getAxiosInstance() {
  return axiosInstance
}

export default getAxiosInstance
