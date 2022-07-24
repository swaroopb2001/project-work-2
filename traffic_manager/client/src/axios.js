import Axios from 'axios'
const instance= Axios.create({
    baseURL: '127.0.0.1:5000'  //BACKEND URL 
})

export default instance