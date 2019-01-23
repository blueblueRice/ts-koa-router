import Request from './request'

export const GET = function(url: string = ''){
  return Request({ url, method: 'get' })
}

export const PUT = function (url: string = '') {
  return Request({ url, method: 'put' })
}

export const POST = function (url: string = '') {
  return Request({ url, method: 'post' })
}

export const DELETE = function (url: string = '') {
  return Request({ url, method: 'delete' })
}