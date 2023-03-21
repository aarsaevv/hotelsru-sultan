import BaseSearch from "./BaseSearch";

function SearchLarge({placeholder = "", iconSrc = ""}) {
  return (
    <div className="_search-large">
        <BaseSearch placeholder={placeholder} iconSrc={iconSrc} />
    </div>
  );
}

export default SearchLarge;