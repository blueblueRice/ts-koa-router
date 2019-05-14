interface RequestObj {
    url: string
    method: 'get' | 'post' | 'delete' | 'put'
}

export default function (obj: RequestObj) {
  return function (_target: any, _name: any, descriptor: any) {
    const fn = descriptor.value
    const method = obj.method.toLowerCase()

    descriptor.value = (router: any): void => {
      router[method](obj.url, async (ctx: any, next: any) => {
        await fn(ctx, next)
      })
    }
  }
}