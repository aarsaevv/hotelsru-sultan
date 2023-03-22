import "./App.scss";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import ItemCard from "./components/ItemCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App({ json = [{}] }) {
  return (
    <div className="App">
      <Header />
      <Catalogue json={json} />
      <ItemCard json={json} />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
