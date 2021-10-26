import axios from '../util/baseHttp'
import {
    LoginDataType,
    RegisterDataType
} from '../types'

export function login (parame: LoginDataType) {
    console.log(parame)
    return axios({
        method: 'post',
        url: '/api/login',
        data: parame
    })
}

export function register (parame: RegisterDataType) {
    console.log(parame)
    return axios({
        method: 'post',
        url: '/api/register',
        data: parame
    })
}
