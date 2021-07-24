import userTypes from '../types/user'

const initial = {
    loggedIn:false
}

const userReducer = (state = initial, action) => {
    switch(action.type){
        case userTypes.signupSuccess:
            return {...state, ...action.payload}

        case userTypes.loginSuccess:
            return {...state, ...action.payload, loggedIn:true}

        default:
            return state
    }
}

export default userReducer