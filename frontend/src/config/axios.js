import axios from 'axios'

import config from './config'

const axiosInstance = axios.create({
	baseURL: config.API,
	timeout: 1000,
	headers: {
		API_KEY: config.API_KEY
	}
  });

export default axiosInstance
