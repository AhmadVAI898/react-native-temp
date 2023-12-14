import { useState, useEffect } from "react";

// Hooks
import useQuery from "@hybris-software/use-query/dist/Hooks/useQuery";

// Libraries
import * as SecureStore from "expo-secure-store";

const useAuth = ({
  url,
  method = "GET",
  executeImmediately = true,
  onSuccess = () => {},
  onUnauthorized = () => {},
  onError = () => {},
  isFocused = null,
}) => {
  const [isLogged, setIsLogged] = useState(undefined);
  const { isLoading, isError, isSuccess, data, error, executeQuery } = useQuery(
    {
      url: url,
      method: method,
      executeImmediately: false,
      onSuccess: (response) => {
        setIsLogged(true);
        onSuccess(response);
      },
      onUnauthorized: (error) => {
        SecureStore.deleteItemAsync("token");
        setIsLogged(false);
        onUnauthorized(error);
      },
      onError: (error) => {
        setIsLogged(false);
        onError(error);
      },
    }
  );

  useEffect(() => {
    if (executeImmediately && isFocused) {
      executeQuery();
    }
  }, [isFocused]);

  return {
    isLogged: isLogged,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    data: data,
    error: error,
    executeQuery: executeQuery,
  };
};

export default useAuth;
