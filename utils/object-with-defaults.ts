const handler = <T>(init: ()=>T): ProxyHandler<object> => ({
	get(target, prop, receiver) {
		return Reflect.get(target, prop, receiver) || init();
	}
})