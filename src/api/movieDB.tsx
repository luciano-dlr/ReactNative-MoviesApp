import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org//3/movie',
    params:{
        language: 'es-ES'
    },
    headers:{
        accept:'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTYyMDhhMTg5ZmRmOTk2OGE2ZTcyMmIwMDEyNjg3YyIsInN1YiI6IjY1YmQ0M2M5ZDdjZDA2MDE0ODU0NTFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tsgm9--VQps8i2t-8LsWCwpjxaJGhR9mx0Fsd5ABqUw'
    }
})

export default movieDB;