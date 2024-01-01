import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { validateToken } from "../api/auth";

export function Permission({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [verification, setVerification] = useState(true);

  const { isLoggedIn, accessToken } = useAuthContext();

  async function checkTokenValidity(token: string) {
    const response = await validateToken(token);

    if (!response.success) {
      navigate("auth");
    } else if (response.success && !response.data.success) {
      navigate("auth");
    } else {
      if (location.pathname === "/") navigate("movies");
    }

    setVerification(false);
  }

  useEffect(() => {
    if (isLoggedIn) {
      checkTokenValidity(accessToken as string);
    }

    if (!isLoggedIn) {
      navigate("auth");
      setVerification(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (verification) return null;
  return children;
}
