interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
  time: number
}

type ApiPromise<T = any> = Promise<ApiResponse<T>>