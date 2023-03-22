import "./CartItem.scss";
import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge";
import footDolchemilk from "../assets/images/foot-dolchemilk.jpg";
import CountSelector from "./UI/Forms/CountSelector";

function CartItem({ iconSrc = "" }) {
  return (
    <div className="cart-item">
      <div className="cart-item__cart-information cart-information">
        <div className="cart-information__cart-image cart-image">
          <img
            className="cart-image__image"
            src={footDolchemilk}
            alt="DOLCE MILK Крем для ног «Дикий инжир»"
          />
        </div>
        <div className="cart-information__cart-specification cart-specification">
          <h6 className="cart-specification__value-weight">100 мл</h6>
          <h2 className="cart-specification__name">
            DOLCE MILK Крем для ног «Дикий инжир»
          </h2>
          <p className="cart-specification__description">
            С ультраэффективным кремом дикий инжир весь мир у ваших ног. У ваших
            - мягких, ухоженных ног с нежными как у младенца пяточками. Не
            ножки, а мечта!
          </p>
        </div>
      </div>
      <CountSelector />
      <div className="cart-item__cart-price cart-price">
        <h2>299</h2>
      </div>
      <RoundButtonLarge iconSrc={iconSrc} />
    </div>
  );
}

export default CartItem;
