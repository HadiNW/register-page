exports.checkReqBody = (body, required) => {
	for (let i = 0; i < required.length; i++) {
		const req = required[i]
		if (!(req in body) || !body[req]) {
			return req
		}
	}
}

exports.validatePhoneNumber = (str) => {
	str = str.replace('(+62)', '0')
	str = str.replace('+62', '0')
	return str
}
