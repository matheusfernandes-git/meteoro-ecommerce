import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { AllContextsProvider } from "./context";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AllContextsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="*" element={<NotFound renderCartIcon={false} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AllContextsProvider>
  );
}

export default App;
