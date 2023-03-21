import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalogue from './components/Catalogue';
// import ButtonLarge from './components/UI/Buttons/ButtonLarge';
// import ButtonMedium from './components/UI/Buttons/ButtonMedium';
// import ButtonSmall from './components/UI/Buttons/ButtonSmall';
// import RoundButtonLarge from './components/UI/Buttons/RoundButtonLarge';
// import SearchLarge from './components/UI/Forms/SearchLarge';
// import SearchMedium from './components/UI/Forms/SearchLarge';
// import RoundButtonSmall from './components/UI/Buttons/RoundButtonSmall';
// import Catalogue from './components/Catalogue';
// import ItemCard from './components/ItemCard';
// import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalogue />
      <Footer />
    </div>
  );
}

export default App;