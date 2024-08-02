import axios from "axios"

const searchImages = () => {
    axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID",

        },
        params: {
            // query: 'cat',
            // per_page: 10,
            // page: 1
        }
    })
}