//---------------------------------------------------------------------
//-----------------------------------------------------------LOGIN_USER
export const loginUser = (payload, callback) => async(dispatch) => {
    const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: payload
            })
        })
        .then(res => res.json())
        if (response.error) {
            alert(response.error)
        }
        dispatch({type: 'LOGIN_USER', payload: response})
        callback()
};

//---------------------------------------------------------------------
//-----------------------------------GET_USER (CHECKS FOR CURRENT USER)
export const getUser = () => { 
    return dispatch => {   
        return fetch("http://localhost:3000/currentUser", {  
            credentials: "include",         
            headers: {            
                "Content-Type": "application/json"          
                }
            })        
            .then(res => res.json())        
            .then(userData => {          
                if (userData.error) {            
                    console.log(userData.error)          
                } else {            
                     dispatch({type: "CURRENT_USER", user: userData})          
                }
            })        
    }
}

//---------------------------------------------------------------------
//----------------------------------------------------------LOGOUT_USER
export const logoutUser = () => {
    return dispatch => {
     return fetch(`http://localhost:3000/logout`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            }
        })
         .then(data => {
             dispatch({ type: "LOGOUT_USER" })
             
         }
        )
    }
}

//---------------------------------------------------------------------
//----------------------------------------------------------CREATE_USER
export const createUser = (payload, callback) => async(dispatch) => {
    const res = await fetch("http://localhost:3000/users", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: payload
                })
        })
        .then(res => res.json())
            if (res.error) {
                alert(res.error)
            } 
            dispatch({ type: "CREATE_USER", payload: res })
            callback();
            }


//---------------------------------------------------------------------
//-------------------------------------------------------GET_USER_WORKS
export const getWorks = () => { 
    return dispatch => {   
        return fetch("http://localhost:3000/works", {  
            credentials: "include",         
            headers: {            
                "Content-Type": "application/json"          
                }
            })        
            .then(res => res.json())        
            .then(workData => {          
                if (workData.error) {            
                    alert(workData.error)          
                } else {            
                     dispatch({type: "SHOW_WORKS", work: workData})          
                }
            })        
    }
}