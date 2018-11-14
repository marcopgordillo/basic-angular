export interface AppState {
  shoppingList: State;
}

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(stat = initialState, action) {
  return state;
}
