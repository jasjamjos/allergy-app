import axios from 'axios';

const baseURL = 'https://api.unsplash.com/'

export const fetchImages = async (params) => {
    let url = baseURL;

    if (!params) url += `photos`

    if (params && params.query) url += `search?query=${params.query}`

    try {
        const { data } = await axios.get(url, {
            params: {
                client_id: process.env.REACT_APP_UNSPLASH_API_KEY
            }
        })

        return data;
    } catch (error) {
        console.log(error)
    }
}