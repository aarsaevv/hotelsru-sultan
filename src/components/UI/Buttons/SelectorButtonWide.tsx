import "./SelectorButton.scss";
import BaseButton from "./BaseButton";

function SelectorButtonWide({ textContent = "" }) {
  return (
    <div className="_selector-wide">
      <BaseButton textContent={textContent} />
    </div>
  );
}

export default SelectorButtonWide;
