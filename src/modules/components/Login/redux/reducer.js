//@flow
import type {Action} from '../../shared/flowTypes/flowTypes';
import { EXECUTAR_LOGIN } from './type';

export type InitialStateLogin = {
    User: {
        userName: String,
        password: String,
    }
}

export const initialStateLogin = {
    User: {
        userName: '',
        password: '',
    }
};

type LoginReducer = (state: InitialStateLogin, action: Action) => Object

export const loginReducer: LoginReducer = (state = initialStateLogin, action) => {
    const {payload} = action;

    switch (action.type) {
        case EXECUTAR_LOGIN:
            return {
                ...state,
                User: payload.user,
            };
    
        default:
            return state;
    }
};
