import "./ItemCard.scss";
import doggo from "../assets/images/remove__after__test__doggo.jpg";
import share from "../assets/icons/share.svg";
import basketWhite from "../assets/icons/basket-white.svg";
import ButtonMedium from "./UI/Buttons/ButtonMedium";

function ItemCard() {
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
          <img src={doggo} alt={doggo} />
        </div>
        <div className="product__product-info product-info">
          <h5 className="product-info__available">В наличии</h5>
          <h2 className="product-info__name">
            <span>ARIEL</span> Автомат Гель СМС жидкое в растворимых капсулах
            Liquid Capsules Горный родник
          </h2>
          <h6 className="product-info__value-weight">90 г</h6>
          <div className="product-info__cart cart">
            <h2 className="cart__price">48,76 ₸</h2>
            <div className="selector">СЕЛЕКТОР</div>
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
              Производитель: <span>BioMio</span>
            </h5>
            <h5 className="info__brand">
              Бренд: <span>BioMio</span>
            </h5>
            <h5 className="info__vendor">
              Артикул: <span>2281488</span>
            </h5>
            <h5 className="info__barcode">
              Штрихкод: <span>4604049097548</span>
            </h5>
            <div className="info__description card-description">
              <h3 className="card-description__heading">Описание</h3>
              <p className="card-description__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium nam debitis amet hic earum consequuntur fugit, vel,
                placeat officiis sequi doloremque. Voluptatibus dolor autem
                repudiandae, omnis placeat ipsa doloribus aliquam illum cumque
                consequuntur non modi recusandae impedit hic a eum!
              </p>
            </div>
            <div className="info__characteristics characteristics">
              <h3 className="characteristics__heading">Характеристики</h3>
              <h5 className="characteristics__purpose">
                Назначение: <span>BioMio</span>
              </h5>
              <h5 className="characteristics__type">
                Тип: <span>BioMio</span>
              </h5>
              <h5 className="characteristics__manufacturer">
                Производитель: <span>Doggo</span>
              </h5>
              <h5 className="characteristics__brand">
                Бренд: <span>BioMio</span>
              </h5>
              <h5 className="characteristics__vendor">
                Артикул: <span>2281488</span>
              </h5>
              <h5 className="characteristics__barcode">
                Штрихкод: <span>4604049097548</span>
              </h5>
              <h5 className="characteristics__value">
                Вес: <span>90 г</span>
              </h5>
              <h5 className="characteristics__weight">
                Объем: <span>90 г</span>
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
