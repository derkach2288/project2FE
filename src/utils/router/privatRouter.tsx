import { Navigate, Outlet } from "react-router-dom";

const PrivatRoute = () => {
    const auth = true;
    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    );
}
export default PrivatRoute;