export default {
	API_KEY:'ulala',
	API: process.env.NODE_ENV === 'development' ? 'http://localhost:7000' : `'https://qnugfhsrfi.execute-api.ap-southeast-1.amazonaws.com/dev'`
}
