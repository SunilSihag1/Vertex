/**
 * refreshClient.js
 *
 * Separate Axios instance ONLY for refresh endpoint.
 * Important: No interceptors here.
 * Prevents refresh loops.
 */

import axios from "axios";

const refreshClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
    withCredentials: true, // send HttpOnly refresh cookie
});

export default refreshClient;