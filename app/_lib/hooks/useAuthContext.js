import { useContext } from "react";
import { AuthContext } from "../authContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw Error("Unauthorized access. Check your context");
  return context;
}
