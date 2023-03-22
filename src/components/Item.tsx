import "./Item.scss";
import basketWhite from "../assets/icons/basket-white.svg";
import BaseButton from "./UI/Buttons/BaseButton";

function Item({
  imageSrc,
  size,
  brand,
  title,
  barcode,
  manufacturer,
  price,
}: any) {
  return (
    <div className="item">
      <img className="item__image" src={imageSrc} alt={brand} />
      <div className="item__description description">
        <h6 className="description__weight">{size}</h6>
        <h3 className="description__name">
          <span>{brand}</span> {title}
        </h3>
        <h5 className="description__manufacturer">
          Штрихкод:<span>{barcode}</span>
        </h5>
        <h5 className="description__barcode">
          Производитель:<span>{manufacturer}</span>
        </h5>
        <h5 className="description__brand">
          Бренд:<span>{brand}</span>
        </h5>
      </div>
      <div className="purchase">
        <h3 className="purchase__price">{(price * 5.7).toFixed(1)} ₸</h3>
        <div className="_button-small purchase__button">
          <BaseButton textContent="В корзину" iconSrc={basketWhite} />
        </div>
      </div>
    </div>
  );
}

export default Item;
