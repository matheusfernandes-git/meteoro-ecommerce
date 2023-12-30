import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { AllContextsProvider } from "./context";

function App() {
  return (
    <AllContextsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AllContextsProvider>
  );
}

export default App;
