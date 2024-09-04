"use client";
import Loader from "@/components/Loader";
import { createContext, useEffect, useState, useReducer } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authData, dispatch] = useReducer(authReducer, null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem("_greenagrichain"));
    if (storedAuthData) {
      dispatch({
        type: "LOGIN",
        payload: { ...storedAuthData, userFound: true },
      });
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authData, dispatch }}>
      {isLoading ? (
        <div className="absolute inset-0 bg-slate-400/40 flex justify-center items-center">
          <Loader className="w-20 h-20 text-primary" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
      break;
    case "LOGOUT":
      return null;
      break;
    case "UPDATE_USER":
      return { ...state, user: { ...state.user, ...action.payload } };
      break;
    default:
      return state;
  }
}
