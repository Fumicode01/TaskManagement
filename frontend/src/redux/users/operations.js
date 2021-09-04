import {push} from 'connected-react-router'
import {signInAction} from "./actions"





// Authentication Action
export const listenAuthState = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if(!token) {
            dispatch(push('/login'))
        }
        dispatch(signInAction({
            isSignedIn:true,
        }))
    }
}