import axios from 'axios'

const url = ""

export const authenticatesignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log(error.message)
    }

}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('this is authenticate login error', error.message)
    }
}