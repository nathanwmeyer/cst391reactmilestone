import axios from 'axios';

// the source url for axios actions
export default axios.create({
    baseURL: 'https://gcucst391express.azurewebsites.net'
})