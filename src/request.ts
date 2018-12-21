interface RequestObj {
    url: string
    method: 'get' | 'post' | 'delete' | 'put'
}

export default function (obj: RequestObj) {
	return function (target: any, name: any, descriptor: any) {
		const fn = descriptor.value

		descriptor.value = (router: any): void => {
			router[obj.method](obj.url, async (ctx: any, next: any) => {
				await fn(ctx, next)
			})
		}
	}
}