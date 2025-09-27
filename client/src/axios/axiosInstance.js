import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.LARAVEL_API_KEY}/api`,
    withCredentials: true,
});

// before ever y request, axios will automatically:
// * get token from localStorage
// * then add it to the requrest Header
// so you dont have to manually attach it every time you call the axiosInstance

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// This interceptor automatically handles failed requests.
// If the server says 401 Unauthorized, it clears the saved token so the app knows the user isn’t logged in anymore.
axiosInstance.interceptors.response.use(
    (response) => {
        return response; // if request succeeds, just return the response
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN"); // clear token if unauthorized
        }
        throw error; // re-throw so the calling code can handle it
    }
);

export default axiosInstance;

// Interceptors let you automate common logic (like adding auth tokens, handling errors, logging, etc.)
//  for all Axios requests/responses in one place.
