//@flow
import {type InitialStateLogin} from '../../modules/components/Login/redux/reducer';

const MODULE_NAME = 'Global.';

export const BUTTON_LOADING = `${MODULE_NAME}BUTTON_LOADING`;
export const PAGE_LOADING = `${MODULE_NAME}PAGE_LOADING`;


export type Action = {
  type: string,
  payload: any,
};

export type ErroMensagem = Array<{
  fieldName: string,
  errors: Array<string>
}>

export type ErroApi = {
  response: {
    status: number,
    data: {
      messages: ErroMensagem
    }
  }
};

export type ErroLogin = {
  message: string,
}

export type Evento = {
  id: number,
  type: string,
  content: string,
  data: string
}

export type Mensagem = {
  message: string,
}

export type Store = {
  LOGIN: InitialStateLogin,
  
};
