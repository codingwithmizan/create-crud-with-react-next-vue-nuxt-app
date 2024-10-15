import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isAuthorized: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ isAuthorized }) => {
  if (isAuthorized) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
