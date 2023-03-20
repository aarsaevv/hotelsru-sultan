import "../scss/components/search.scss";
import Button from "../components/Button";

function Search() {
  return (
    <div className="search">
      <input className="search__input" placeholder="Fuhui..."></input>
      <div className="_button-round-small search__button">
        <Button />
      </div>
    </div>
  );
}

export default Search;