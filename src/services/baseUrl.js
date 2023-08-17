import axios from "axios";

export const $instance = axios.create({
    baseURL: "https://64c50509c853c26efada6457.mockapi.io/contacts"
})