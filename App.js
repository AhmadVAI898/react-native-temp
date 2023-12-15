// Layouts
import AppLayout from "./appLayout";

// Libraries
import { ApiProvider } from "@hybris-software/use-query";
import { generateApiClient } from "./Api/client";
import AuthProvider from "./vendors/Components/AuthProvider";

// Data
import config from "./data/config";

export default function App() {
  const apiClient = generateApiClient({
    baseUrl: config.API_BASE_URL,
    authorizationHeader: "Authorization",
    authorizationPrefix: "Token ",
  });

  return (
    <ApiProvider apiClient={apiClient}>
      <AuthProvider apiClient={apiClient} authUrl="auth/user/">
        <AppLayout />
      </AuthProvider>
    </ApiProvider>
  );
}
