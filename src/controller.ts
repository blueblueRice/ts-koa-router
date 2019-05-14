interface P {
  prefix?: string
}

export default function (routerInfo: P) {
  return function (target: any) {
    const reqList = Object.getOwnPropertyDescriptors(target.prototype)
    const router = new target()
    routerInfo.prefix && router.prefix(routerInfo.prefix)

    for (let key in reqList) {
      if (key !== 'constructor') {
        const fn = reqList[key].value
        fn(router)
      }
    }

    return router
  }
}
