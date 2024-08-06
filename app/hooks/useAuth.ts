import { AuthContext } from "@/proveders/auth/AuthProvider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext)