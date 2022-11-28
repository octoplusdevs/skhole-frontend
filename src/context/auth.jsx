import { createContext, useReducer } from "react";
// import PropTypes from "prop-types";

const AuthContext = createContext(null);

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

// AuthContextProvider.propTypes = {
//   children: PropTypes.elementType.isRequired,
// };
