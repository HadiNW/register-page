exports.checkReqBody = (body, required) => {
	for (let i = 0; i < required.length; i++) {
		const req = required[i]
		if (!(req in body) || !body[req]) {
			return req
		}
	}

}
