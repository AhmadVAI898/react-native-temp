import { useState } from "react";

// Contexts
import AuthProviderContext from "../Context/AuthProviderContext";
import UserInfoContext from "../Context/UserInfoContext";

// Libraries
import { ApiProvider } from "@hybris-software/use-query";

const AuthProvider = ({ children, apiClient, authUrl }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <AuthProviderContext.Provider value={authUrl}>
      <ApiProvider apiClient={apiClient}>
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
          {children}
        </UserInfoContext.Provider>
      </ApiProvider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;
