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
          <img src={doggo} />
        </div>
        <div className="product__product-info product-info">
          <div className="product-info__available">В наличии</div>
          <div className="product-info__name">
            <span>ARIEL</span> Автомат Гель СМС жидкое в растворимых капсулах
            Liquid Capsules Горный родник
          </div>
          <div className="product-info__value-weight">90 г</div>
          <div className="product-info__cart cart">
            <div className="cart__price">48,76 ₸</div>
            <div className="selector">СЕЛЕКТОР</div>
            <ButtonMedium textContent="В корзину" iconSrc={basketWhite} />
          </div>
          <div className="product-info__share-price share-price">
            <div className="share-price__buttons buttons">
              <div className="buttons__share">
                <img src={share} alt="Share" />
              </div>
              <div className="buttons__advertisement">
                При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и
                области
              </div>
              <div className="buttons__price">Прайс-лист</div>
            </div>
          </div>
          <div className="product-info__info info">
            <div className="info__manufacturer">Производитель: BioMio</div>
            <div className="info__brand">Бренд: BioMio</div>
            <div className="info__vendor">Артикул: 2281488</div>
            <div className="info__barcode">Штрихкод: 4604049097548</div>
            <div className="info__description description">
              <h3 className="description__heading">Описание</h3>
              <div className="description__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium nam debitis amet hic earum consequuntur fugit, vel,
                placeat officiis sequi doloremque. Voluptatibus dolor autem
                repudiandae, omnis placeat ipsa doloribus aliquam illum cumque
                consequuntur non modi recusandae impedit hic a eum!
              </div>
            </div>
            <div className="info__characteristics characteristics">
              <h3 className="characterisctics__heading">Характеристики</h3>
              <div className="characteristics__purpose">Назначение: BioMio</div>
              <div className="characteristics__type">Тип: BioMio</div>
              <div className="characteristics__manufacturer">
                Производитель: Doggo
              </div>
              <div className="characteristics__brand">Бренд: BioMio</div>
              <div className="characteristics__vendor">Артикул: 2281488</div>
              <div className="characteristics__barcode">
                Штрихкод: 4604049097548
              </div>
              <div className="characteristics__value">Вес: 90 г</div>
              <div className="characteristics__weight">Объем: 90 г</div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
