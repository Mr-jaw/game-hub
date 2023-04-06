import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40251fd189b244788bde97f9e6a078f7'
    }
})