import Home from "@/components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Auth from "@/components/screens/auth/Auth";

export const userRoutes: IRoute[] = [
    // {
    //     name: 'Home',
    //     component: Home
    // },
    {
        name: 'Auth',
        component: Auth
    }
]