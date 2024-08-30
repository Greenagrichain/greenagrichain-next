"use client";
import { IconRotate } from "@tabler/icons-react";
import { createContext, useEffect, useState, useReducer } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authData, dispatch] = useReducer(authReducer, null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem("_greenagrichain"));

    if (storedAuthData) {
      dispatch({ type: "LOGIN", payload: storedAuthData });
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authData, dispatch }}>
      {isLoading ? (
        <div className="absolute inset-0 bg-slate-400/40 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary icon icon-tabler icons-tabler-outline icon-tabler-loader-3"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              className="animate-spin origin-center"
              d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"
            />
            <path
              className="animate-spin direction-reverse origin-center"
              d="M17 12a5 5 0 1 0 -5 5"
            />
          </svg>
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
