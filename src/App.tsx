import { Router } from "./router/Router";
import { AuthProvider } from "./context/AuthContext";
import { SwrContext } from "./context/SwrContext";
import { ChakraContext } from "./context/ChakraContext";
import "./App.css";

function App() {
  return (
    <ChakraContext>
      <AuthProvider>
        <SwrContext>
          <Router />
        </SwrContext>
      </AuthProvider>
    </ChakraContext>
  );
}

export default App;
