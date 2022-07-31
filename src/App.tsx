import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import { MainTemplate } from "./components/Layout/MainTemplate";
// import GlobalStyle from "./styles/global"; 


const App = () => {
  return (
    <AuthProvider>
      <MainTemplate children={undefined} />

      <RoutesApp />

      {/* <GlobalStyle /> */}
    </AuthProvider>
  );
};

export default App;
