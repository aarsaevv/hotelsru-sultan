import BaseButton from "./BaseButton";

function RoundButtonLarge({ iconSrc = "" }) {
  return (
    <div className="_button-round-big">
      <BaseButton iconSrc={iconSrc} />
    </div>
  );
}

export default RoundButtonLarge;
