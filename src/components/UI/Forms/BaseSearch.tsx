import "./BaseSearch.scss";
import BaseButton from "../Buttons/BaseButton";

function BaseSearch() {
  return (
    <div className="search">
      <input className="search__input" placeholder=""></input>
      <div className="_button-round-small search__button">
        <BaseButton />
      </div>
    </div>
  );
}

export default BaseSearch;