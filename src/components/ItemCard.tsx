//@ts-nocheck

import "./ItemCard.scss";
import doggo from "../assets/images/remove__after__test__doggo.jpg";
import share from "../assets/icons/share.svg";
import basketWhite from "../assets/icons/basket-white.svg";
import ButtonMedium from "./UI/Buttons/ButtonMedium";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CountSelector from "./UI/Forms/CountSelector";

function ItemCard({ json = [{}] }) {
  const params = useParams();
  const [itemCards, setItemCards] = useState(json);

  useEffect(() => {
    let id = Object.values(params).join("");
    console.log(id);
    let copyItemCards = [...itemCards];
    copyItemCards = copyItemCards.filter((el) => el.barcode == id);
    setItemCards(copyItemCards);
  }, []);

  return (
    <div className="_container item-card">
      <div className="item-card__breadcrumbs">
        <a href="#">Главная | </a>
        <span>
          <a href="#">Каталог | </a>
        </span>
        <span>
          <a href="#">ТОВАР</a>
        </span>
      </div>
      <div className="item-card__product product">
        <div className="product__image">
          <img src={itemCards[0].imageSrc} alt={doggo} />
        </div>
        <div className="product__product-info product-info">
          <h5 className="product-info__available">В наличии</h5>
          <h2 className="product-info__name">
            <span>{itemCards[0].brand}</span> {itemCards[0].title}
          </h2>
          <h6 className="product-info__value-weight">
            {itemCards[0].size + " " + itemCards[0].sizeType.split(", ")[1]}
          </h6>
          <div className="product-info__cart cart">
            <h2 className="cart__price">
              {(itemCards[0].price * 5.7).toFixed(1)} ₸
            </h2>
            <div className="selector">
              <CountSelector />
            </div>
            <ButtonMedium textContent="В корзину" iconSrc={basketWhite} />
          </div>
          <div className="product-info__share-price share-price">
            <div className="share-price__buttons buttons">
              <div className="buttons__share">
                <img src={share} alt="Share" />
              </div>
              <div className="buttons__advertisement advertisement">
                <h6 className="advertisement__text">
                  При покупке от <span>10 000 ₸</span> бесплатная доставка по
                  Кокчетаву и области
                </h6>
              </div>
              <div className="buttons__price price">
                <a href="#" className="price__anchor">
                  Прайс-лист
                </a>
              </div>
            </div>
          </div>
          <div className="product-info__info info">
            <h5 className="info__manufacturer">
              Производитель: <span>{itemCards[0].manufacturer}</span>
            </h5>
            <h5 className="info__brand">
              Бренд: <span>{itemCards[0].brand}</span>
            </h5>
            <h5 className="info__vendor">
              Артикул: <span>{itemCards[0].barcode}</span>
            </h5>
            <h5 className="info__barcode">
              Штрихкод: <span>{itemCards[0].barcode}</span>
            </h5>
            <div className="info__description card-description">
              <h3 className="card-description__heading">Описание</h3>
              <p className="card-description__text">
                {itemCards[0].description}
              </p>
            </div>
            <div className="info__characteristics characteristics">
              <h3 className="characteristics__heading">Характеристики</h3>
              <h5 className="characteristics__purpose">
                Назначение: <span>{itemCards[0].manufacturer}</span>
              </h5>
              <h5 className="characteristics__type">
                Тип: <span>{itemCards[0].manufacturer}</span>
              </h5>
              <h5 className="characteristics__manufacturer">
                Производитель: <span>{itemCards[0].manufacturer}</span>
              </h5>
              <h5 className="characteristics__brand">
                Бренд: <span>{itemCards[0].brand}</span>
              </h5>
              <h5 className="characteristics__vendor">
                Артикул: <span>{itemCards[0].barcode}</span>
              </h5>
              <h5 className="characteristics__barcode">
                Штрихкод: <span>{itemCards[0].barcode}</span>
              </h5>
              <h5 className="characteristics__value">
                Вес:{" "}
                <span>
                  {itemCards[0].size +
                    " " +
                    itemCards[0].sizeType.split(", ")[1]}
                </span>
              </h5>
              <h5 className="characteristics__weight">
                Объем:{" "}
                <span>
                  {itemCards[0].size +
                    " " +
                    itemCards[0].sizeType.split(", ")[1]}
                </span>
              </h5>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
