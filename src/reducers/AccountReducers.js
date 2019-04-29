import { setValue } from '../storage'
const initial = {
    user: {},
    access_token: {},
    isLoggedIn: false,
    isLoading: false,
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'REGISTER_USER_PENDING':
            return {
                ...state,
                isLoading: true                
            }
        case 'REGISTER_USER_FULFILLED':
            // console.log(action.payload.data.access_token.token);            
            setValue('token', JSON.stringify(action.payload.data.access_token.type + ' ' + action.payload.data.access_token.token))
            // console.log(action.payload.data.data);
            return {
                ...state,
                access_token: action.payload.data.access_token,
                user: action.payload.data.user,
                isLoggedIn: true,
                isLoading: false
            }

        case 'LOGIN_USER_PENDING':

            // console.log(action.payload.data.access_token);
            // const { token, type } = action.payload.data.access_token
            // setValue('token', JSON.stringify(type + ' ' + token))
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_USER_FULFILLED':

            // console.log(action.payload.data.access_token);
            const { token, type } = action.payload.data.access_token
            setValue('token', JSON.stringify(type + ' ' + token))
            return {
                ...state,
                access_token: action.payload.data.access_token,
                user: action.payload.data.user,
                isLoggedIn: true,
                isLoading: false
            }

        case 'CLEAR_USER':
            // console.log(action.payload.data.data);
            return {
                user: {},
                access_token: {},
                isLoggedIn: false,
                isLoading: false,
            }

        case 'GET_USER_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                ...state,
                user: action.payload.data.user,
                isLoggedIn: true,
            }
        default:
            return state;

    }
}
