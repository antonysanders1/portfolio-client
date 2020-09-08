//----------------------------------------------------------LOGIN_USER
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


//----------------------------------------------------------GET_USER (CHECKS FOR CURRENT USER)
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
                    alert(userData.error)          
                } else {            
                     dispatch({type: "CURRENT_USER", user: userData})          
                }
            })        
    }
}


//----------------------------------------------------------LOGOUT_USER
export const logoutUser = (callback) => {
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
             callback()
         }
        )
    }
}


//----------------------------------------------------------CREATE_USER
// export const createUser = (newUser, callback) => {
//     return (dispatch) => {
//         return fetch("http://localhost:3000/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 user: {
//                     name: newUser.username,
//                     email: newUser.email,
//                     title: newUser.title,
//                     password: newUser.password,
//                 }
//             })
//         })
//         .then(res => res.json())
//         .then(userInfo => {
//             if (userInfo.error) {
//                 alert(userInfo.details)
//             } else {
//                 const authentication_token = userInfo.data.attributes.authentication_token;
//                 localStorage.setItem('token', authentication_token);
//                 dispatch({ type: "LOGIN_USER", payload: userInfo.data.attributes })
//                 callback();
//             }
//         })
//             .catch(console.log())
//     };
// };