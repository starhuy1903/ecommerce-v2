import {Navigate, Outlet} from "react-router-dom";

export const AuthRoute = () => {
    const user =true;
    return !user ? (
        <Outlet />
    ) : (<Navigate to="/" /> )
}