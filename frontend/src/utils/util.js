export const isValidDate = (year, month, day) => {
	var d = new Date(year, month, day)
    if (d.getFullYear() === year && d.getMonth() === month && d.getDate() === day) {
        return true
    }
    return false
}
