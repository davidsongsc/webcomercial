const initialState = {
    usuarioCorrente: null,
};

const userReducer = (state = initialState, action) => {
if (action.type == 'user/login'){
    return {...state, usuarioCorrente: 1};
}
return state;
};

export default userReducer;