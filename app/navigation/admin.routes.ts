import Admin from "@/components/screens/admin/home/admin";
import { IRoute } from "./navigation.types";

export const adminRoutes: IRoute[] = [{
    name: 'Admin',
    component: Admin,
    isAdmin: true
}
]