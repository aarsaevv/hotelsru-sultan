import './scss/App.scss';
import Header from './components/Header';
import Button from './components/Button';
import Search from './components/Search';
import Catalogue from './components/Catalogue';
import Item from './components/Item';
import ItemCard from './components/ItemCard';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="_button-large">
        <Button />
      </div>
      <div className="_button-medium">
        <Button />
      </div>
      <div className="_button-small">
        <Button />
      </div>
      <div className="_button-round-big">
        <Button />
      </div>
      <div className="_search-large">
        <Search />
      </div>
      <div className="_search-medium">
        <Search />
      </div>
      {/* <div className="_button-round-small">
        <Button />
      </div> */}
      {/* <Item />
      <Catalogue />
      <ItemCard />
      <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;