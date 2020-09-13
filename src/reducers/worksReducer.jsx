export default (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_WORKS':
            return (action.work)

         case 'CREATE_WORK':
             return (action.work)

        // case 'LOGOUT_USER':
        //     return {}

        // case 'CURRENT_USER':
        //     return (action.user)
        default:
            return state;
    };
};