/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("unknown action");
  }
}
function AuthContextProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function authenticate(user) {
    if (true) dispatch({ type: "login", payload: user });
  }
  function disAuthenticate() {
    dispatch("logout");
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authType: "admin",
        authenticate,
        disAuthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("out side the Auth context provider");
  return context;
}
export { AuthContextProvider, useAuth };
