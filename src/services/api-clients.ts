import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd4641af4b05041a68b33c5d4e4e9f405'
    }
})