import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://34.85.17.252:8000',
    headers: {
        'Content-Type': 'application/json'
    }
})

// axiosClient.interceptors.request.use(async (config) => {
//     // Handle token here ...
//     const userToken = localStorage.getItem(APP_CONSTANTS.USER_TOKEN)
//     if (userToken) {
//         config.headers.Authorization = `Bearer ${userToken}`;
//     }

//     return config;
// });

axiosClient.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    // Handle errors
    return Promise.reject(error);
});

export default axiosClient;