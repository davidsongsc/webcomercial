import UserActionTypes from "./action-types";

const initialState = {
    usuarioCorrente: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return { ...state, usuarioCorrente: action.payload.usuario };
        case UserActionTypes.LOGOUT:
            return { ...state, usuarioCorrente: null };

        default:
            return state
    }
};

export default userReducer;