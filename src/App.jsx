import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { AuthContextProvider } from "./contexts/AuthContext";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <GlobalStyle />
          <RoutesApp />
        </AuthContextProvider>
      </BrowserRouter>

      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
