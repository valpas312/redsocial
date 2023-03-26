import React from "react";
import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { createContext } from "react";

const queryClient = new QueryClient();
export const contexto = createContext();

const App = () => {
  const [user, setUser] = React.useState({});

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <contexto.Provider value={[user, setUser]}>
          <Router />
        </contexto.Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
