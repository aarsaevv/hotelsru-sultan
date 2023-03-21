import "./BaseButton.scss";

function Button({ textContent = "", iconSrc = "" }) {
  return (
    <button className="button">
      {textContent}
      <img src={iconSrc} alt="" className="button__icon" />
    </button>
  );
}

export default Button;
