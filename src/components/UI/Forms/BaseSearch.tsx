import "./BaseSearch.scss";
import BaseButton from "../Buttons/BaseButton";

function BaseSearch({placeholder = "", iconSrc = ""}) {
  return (
    <div className="search">
      <input className="search__input" placeholder={placeholder}></input>
      <div className="_button-round-small search__button">
        <BaseButton iconSrc={iconSrc} />
      </div>
    </div>
  );
}

export default BaseSearch;