export const isValidDate = (year, month, day) => {
	var d = new Date(year, month, day)
    if (d.getFullYear() === Number(year) && d.getMonth() === Number(month) && d.getDate() === Number(day)) {
        return true
    }
    return false
}

export const isPhoneNumberValid = (str) => {
	const patterns = [
	/^0\d{10,13}$/,
    /^\+62\d{10,13}$/,
    /^\(\+62\)\d{10,13}$/,
	]

	return patterns.some(pattern => pattern.test(str))
}
