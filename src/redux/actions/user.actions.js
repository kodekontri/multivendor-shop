import userTypes from '../types/user'
import alertTypes from '../types/alert'
import {auth} from "../../firebase/firebase"

const userActions = {
    register: (email, password) => async (dispatch)=>{
        try {
            const data = await auth.createUserWithEmailAndPassword(email, password)
            dispatch({
                type: userTypes.signupSuccess,
                payload: data.user
            })
            dispatch({
                type: alertTypes.alertOpen,
                payload: {
                    type: "success",
                    message: "Account created"
                }
            })
        } catch (error) {
            dispatch({
                type: alertTypes.alertOpen,
                payload: {
                    type: "danger",
                    message: error.message
                }
            })
        }
    },
    login: (email, password) => async (dispatch)=>{
        try {
            const data = await auth.signInWithEmailAndPassword(email, password)
            dispatch({
                type: userTypes.loginSuccess,
                payload: data.user
            })
            dispatch({
                type: alertTypes.alertOpen,
                payload: {
                    type: "success",
                    message: "Welcome back"
                }
            })
        } catch (error) {
            dispatch({
                type: alertTypes.alertOpen,
                payload: {
                    type: "danger",
                    message: error.message
                }
            })
        }
    }
}
export default userActions