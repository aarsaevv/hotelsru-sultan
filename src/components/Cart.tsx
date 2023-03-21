import "./Cart.scss";
import CartItem from "./CartItem";
import bin from "../assets/icons/bin.svg";
import ButtonLarge from "./UI/Buttons/ButtonLarge";

function Cart() {
  return (
    <div className="_container cart">
      <div className="cart__breadcrumbs">
        <a href="#">Главная | </a>
        <span>
          <a href="#">Корзина</a>
        </span>
      </div>
      <div className="cart__heading heading">
        <h1 className="heading__title">КОРЗИНА</h1>
      </div>
      <div className="cart__list">
        <CartItem iconSrc={bin} />
      </div>
      <div className="cart__order order">
        <ButtonLarge textContent="Оформить заказ" />
        <div className="order__price"></div>
      </div>
    </div>
  );
}

export default Cart;
