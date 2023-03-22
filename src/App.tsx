import { Route, Routes } from "react-router";
import { useLocation } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App({ json = [{}] }) {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Catalogue json={json} />}></Route>
        <Route path="/cart" element={<Cart json={json} />}></Route>
      </Routes>
      {/* <Catalogue json={json} />
      <ItemCard json={json} />
      <Cart json={json} /> */}
      <Footer />
    </div>
  );
}

export default App;
