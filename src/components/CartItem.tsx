// @ts-nocheck

import "./CartItem.scss";
import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge";
import CountSelector from "./UI/Forms/CountSelector";
import cartSeparator from "../assets/images/cart-separator.png";

function CartItem({
  iconSrc = "",
  imageSrc,
  size,
  brand,
  title,
  barcode,
  price,
  description,
}) {
  return (
    <div className="wrapper">
      <div className="cart-item">
        <div className="cart-item__cart-information cart-information">
          <div className="cart-information__cart-image cart-image">
            <img
              className="cart-image__image"
              src={imageSrc}
              alt="DOLCE MILK Крем для ног «Дикий инжир»"
            />
          </div>
          <div className="cart-information__cart-specification cart-specification">
            <h6 className="cart-specification__value-weight">{size}</h6>
            <h2 className="cart-specification__name">{brand + title}</h2>
            <p className="cart-specification__description">{description}</p>
          </div>
        </div>
        <CountSelector />
        <div className="cart-item__cart-price cart-price">
          <h2>{(price * 5.7).toFixed(1)} ₸</h2>
        </div>
        <RoundButtonLarge iconSrc={iconSrc} />
      </div>
      <img src={cartSeparator} alt="" />
    </div>
  );
}

export default CartItem;
