import axios from 'axios';

const baseURL = 'https://api.unsplash.com/'
const client_id = process.env.REACT_APP_UNSPLASH_API_KEY;

export const fetchImages = async () => {
    let url = baseURL + 'photos';

    try {
        const { data } = await axios.get(url, {
            params: {
                client_id
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const searchImages = async(query) => {
    let url = baseURL + 'search';

    try {
        const { data: { photos: { results } }} = await axios.get(url, {
            params: {
                client_id,
                query
            }
        });

        return results
    } catch (error) {
        console.log(error)
    }
}