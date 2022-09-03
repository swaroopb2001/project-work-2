import Axios from '../axios'
export const loginUser= (username,password)=> async(dispatch)=>{
    try {
        dispatch({
            type:'loginRequest'
        })

        const {user,token}= await Axios.get('/login',{
            username: username,
            password:password 
        },{
            Headers:{
                'Content-Type':'application/json',
                
            },
            
        })
        localStorage.setItem('token', token)

        dispatch({
            type:'loginSuccess',
            payload:user
        })
        
    } catch (error) {
        dispatch({
            type:'loginFailure',
            payload: error
        })
    }

}

export const loadUser=()=>async (dispatch)=>{

    try {
        
        dispatch({
            type: 'loadUserRequest'
        })

        const {user}= await Axios.get('/isloggedin',{
            headers:{
                'authorization': `${localStorage.getItem('token')}`
            }
        })

        dispatch({
            type: 'loadUserSuccess',
            payload: user
        })

    } catch (error) {
        dispatch({
            type:'loadUserFailure',
            payload: error
        })
    }
}