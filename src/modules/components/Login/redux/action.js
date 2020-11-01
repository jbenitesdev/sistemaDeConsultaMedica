//@flow
import { EXECUTAR_LOGIN } from './type';

export const executarLogin = (user: any) => {
    return {
        type: EXECUTAR_LOGIN,
        payload: {
            user: user
        }
    }
}