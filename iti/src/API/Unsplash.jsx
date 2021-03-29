import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://api.unsplash.com',
//     headers:{
//         Authorization: 'Client-ID C9vrGTuCsH2A2z_iRzu5GaTspEozr7pgVup9a7BptBI',
//     },
// })

export default axios.create({
    baseURL: 'http://localhost:8000/movies',
})