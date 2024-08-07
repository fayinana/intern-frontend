import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signIn", { replace: true });
    }
    if (isAuthenticated) {
      navigate("/users", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return children;
}

export default ProtectedRoute;
