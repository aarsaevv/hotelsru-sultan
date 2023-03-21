import "./App.scss";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import ItemCard from "./components/ItemCard";
import Footer from "./components/Footer";
// import ButtonLarge from './components/UI/Buttons/ButtonLarge';
// import ButtonMedium from './components/UI/Buttons/ButtonMedium';
// import ButtonSmall from './components/UI/Buttons/ButtonSmall';
// import Cart from './components/Cart';
// import Catalogue from './components/Catalogue';
// import RoundButtonLarge from './components/UI/Buttons/RoundButtonLarge';
// import RoundButtonSmall from './components/UI/Buttons/RoundButtonSmall';
// import SearchLarge from './components/UI/Forms/SearchLarge';
// import SearchMedium from './components/UI/Forms/SearchLarge';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Catalogue /> */}
      <ItemCard />
      <Footer />
    </div>
  );
}

export default App;
