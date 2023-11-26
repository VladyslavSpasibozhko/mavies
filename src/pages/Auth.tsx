import { Outlet, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export function Auth() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    navigate(isLoggedIn ? "/movies" : "/auth/entry");
  }, [isLoggedIn, navigate]);

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
