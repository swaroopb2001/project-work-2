import Axios from 'axios'
const instance= Axios.create({
    baseURL: 'http://127.0.0.1:5000',
    

})

export default instance