import api from './api'

const auth = {
    login : async (userData) => {

        const response = await api.post(

            '/login',

            userData

        )

        return response.data

    }
}

export default auth;