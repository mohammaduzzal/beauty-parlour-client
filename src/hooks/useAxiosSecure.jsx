import { useNavigate } from "react-router-dom";
import useAuth from "./UseAuth";
import axios from "axios";


const axiosSecure = axios.create({
    baseURL:"http://localhost:5000"
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logout} = useAuth()

    // req interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `bearer ${token}`
        return config
    }, function(error){
        // to sth with req error
        return Promise.reject(error)
    })

    // intercepts 401 and 402 status
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async(error)=>{
        const status = error.response.status
        // for 401 403 logout the user and redirect to login page
        if(status === 401 || status === 403){
            await logout()
            navigate('/login')
        }
        return Promise.reject(error)
    })


    return axiosSecure
};

export default useAxiosSecure;