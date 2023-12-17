import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// axios
export interface MyIntercepton<T = AxiosResponse> {
  requsetSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyIntercepton<T>
}
//项目概述
export interface InterRoot {
  description: string
  version: string
  title: string
  license?: License
}

export interface License {
  name: string
}
//GET TYPE
export interface GETRoot {
  path: string
  info: Info
}

export type Info = {
  [key in 'get' | 'post' | 'delete' | 'put']: Get
}

export interface Get {
  tags: string[]
  summary: string
  operationId: string
  produces: string[]
  responses: Responses
  security: Security[]
  deprecated: boolean
}

export interface Responses {
  '200': N200
  '401': N401
  '403': N403
  '404': N404
}

export interface N200 {
  description: string
  schema: Schema
}

export interface Schema {
  originalRef: string
  $ref: string
}

export interface N401 {
  description: string
}

export interface N403 {
  description: string
}

export interface N404 {
  description: string
}

export interface Security {
  token: string[]
}
export interface Interinfo {
  path: string
  info: Interinfotype
  method: 'get' | 'post' | 'delete' | 'put'
}
interface Interinfotype {
  allPageUsingGET: any
  tags: string[]
  summary: string
  operationId: string
  produces: string[]
  responses: { [key: number]: any }
  security: any[]
}
export interface InterSpecinfo {
  name: string
  label: string[]
  username: string
}
