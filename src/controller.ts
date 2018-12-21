interface P {
    prefix?: string
}

export default function (routerInfo: P) {
	return function (target: any) {
		let reqList = Object.getOwnPropertyDescriptors(target.prototype)
		const router = new target()
		if (routerInfo.prefix) router.prefix(routerInfo.prefix)

		for (let key in reqList) {
			if (key !== 'constructor') {
				let fn = reqList[key].value
				fn(router)
			}
		}

		return router
	}
}
