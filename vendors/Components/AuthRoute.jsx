import React, { useState, useContext, useEffect } from "react";

// Hooks
import useAuth from "../Hooks/useAuth";

// Context
import AuthProviderContext from "../Context/AuthProviderContext";

const AuthRoute = ({
  children,
  forLoggedUser,
  action,
  minimumLoadingTime = 1000,
  loader = <></>,
  apiLoading = false,
  firstApiLoading = false,
  isFocused = true,
}) => {
  const authUrl = useContext(AuthProviderContext);
  const { isLogged, isLoading } = useAuth({
    url: authUrl,
    isFocused: isFocused,
  });
  const [loading, setLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, minimumLoadingTime);
  }, []);

  useEffect(() => {
    if (firstApiLoading === false) {
      setFirstLoading(false);
    }
  }, [firstApiLoading]);

  useEffect(() => {
    if (isLogged !== undefined && loading === false) {
      if (isLogged !== forLoggedUser) {
        action();
      }
    }
  }, [isLogged, loading]);

  if (loading || isLoading || apiLoading || (firstApiLoading && firstLoading)) {
    return loader;
  } else if (isLogged === forLoggedUser) {
    return children;
  } else {
    return <></>;
  }
};

export default AuthRoute;
