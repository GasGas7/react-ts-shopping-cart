import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import ShoppingCartProvider from "./context/ShoppingCart.Provider";


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/store"
            element={<Store />}
          ></Route>
          <Route
            path="/about"
            element={<About />}
          ></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
