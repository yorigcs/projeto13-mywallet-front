import axios from "axios";

const axiosI = axios.create({
    baseURL: "https://my-wallet-project-driven-13.herokuapp.com/"
});

export default axiosI