import "./Item.scss";
import ariel from "../assets/images/ariel.png";
import basketWhite from '../assets/icons/basket-white.svg';
import BaseButton from "./UI/Buttons/BaseButton";

function Item() {
  return (
    <div className="item">
      <div className="item__image">
        <img src={ariel} alt="Ariel" />
      </div>
      <div className="item__description description">
        <h6 className="description__weight">15X28.8 г</h6>
        <h3 className="description__name">
          <span>ARIEL</span> Автомат Гель СМС жидкое в растворимых капсулах
          Liquid Capsules Горный родник
        </h3>
        <h5 className="description__manufacturer">
          Штрихкод:<span>4604049097548</span>
        </h5>
        <h5 className="description__barcode">
          Производитель:<span>Нэфис</span>
        </h5>
        <h5 className="description__brand">
          Бренд:<span>AOS</span>
        </h5>
      </div>
      <div className="purchase">
        <h3 className="purchase__price">48,76 ₸</h3>
        <div className="_button-small purchase__button">
          <BaseButton textContent="В корзину" iconSrc={basketWhite} />
        </div>
      </div>
    </div>
  );
}

export default Item;