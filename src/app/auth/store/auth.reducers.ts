import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SIGNUP:
    case AuthActions.SIGNIN:
      return {
        ...state,
        autenticated: true
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        autenticated: false
      };
    default:
      return state;
  }
}
