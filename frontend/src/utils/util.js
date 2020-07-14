export const isValidDate = (year, month, day) => {
	var d = new Date(year, month, day)
    if (d.getFullYear() === Number(year) && d.getMonth() === Number(month) && d.getDate() === Number(day)) {
        return true
    }
    return false
}
