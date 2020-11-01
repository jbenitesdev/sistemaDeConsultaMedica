//@flow
import { push } from 'connected-react-router';
import { EXECUTAR_LOGIN } from '../redux/type';

function* executarLogin(action: any) {
    try {
        if (action.payload.username === 'admin' && action.payload.password === '123456') {
            yield put(verificarUsuario());
            yield put(push('/'));
        }
    } catch (erro) {

    }
}

function* watchExecutarLogin() {
    yield takeLatest(EXECUTAR_LOGIN, executarLogin);
}