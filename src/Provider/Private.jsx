import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../custom hooks/useAuth";
import Spinner from "./Spinner";

const Private = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" redirect />;
};

export default Private;
