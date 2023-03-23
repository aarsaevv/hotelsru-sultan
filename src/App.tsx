import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Catalogue from "./components/Catalogue";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";
import Layout from "./Layout";
import ScrollToTop from "./helpers/ScrollToTop";

function App({ json = [{}] }) {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalogue json={json} />}></Route>
          <Route path="catalogue" element={<Catalogue json={json} />}></Route>
          <Route
            path="catalogue/:id"
            element={<ItemCard json={json} />}
          ></Route>
          <Route path="cart" element={<Cart json={json} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
