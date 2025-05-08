import axios from 'axios';

const axiosServices = axios.create();

// Interceptor for HTTP responses
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosServices;