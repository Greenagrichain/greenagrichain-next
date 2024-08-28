import useAuthContext from "./useAuthContext";

export default function useLogout() {
  const authContext = useAuthContext();
  function logout() {
    localStorage.removeItem("_greenagrichain");
    authContext.dispatch("LOGOUT");
  }

  return logout;
}
