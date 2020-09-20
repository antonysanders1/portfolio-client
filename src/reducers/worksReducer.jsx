export default (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_WORKS':
            return (action.work)

         case 'CREATE_WORK':
             return (action.work)
             
        default:
            return state;
    };
};