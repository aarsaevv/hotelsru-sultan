import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge";

function CartItem({ iconSrc = "" }) {
  return (
    <div className="cart-item">
      <RoundButtonLarge iconSrc={iconSrc} />
    </div>
  );
}

export default CartItem;
