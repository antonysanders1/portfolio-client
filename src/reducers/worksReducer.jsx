export default (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_WORKS':
            return (action.work)

        // case 'LOGIN_USER':
        //     return (action.payload)

        // case 'LOGOUT_USER':
        //     return {}

        // case 'CURRENT_USER':
        //     return (action.user)
        default:
            return state;
    };
};