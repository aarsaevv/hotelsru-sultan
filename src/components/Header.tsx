import '../scss/components/header.scss';
import location from '../assets/icons/location.svg';
import inbox from '../assets/icons/inbox.svg';

function Header() {
    return (
        <section className="header-section">
            <div className="_container header">
                <div className="header__contacts contacts">
                    <div className="contacts__address address">
                        <img className="address__icon" src={location} alt="location" />
                        <div className="address__text">
                            г. Кокчетав, ул. Ж.Ташенова, 129Б <br />
                            <span>(Рынок Восточный)</span>
                        </div>
                    </div>
                    <div className="contacts__email email">
                        <img className="email__logo" src={inbox} alt="inbox" />
                        <div className="email__text">
                            opt.sultan@mail.ru <br /> 
                            <span>На связи в любое время</span>
                        </div>
                    </div>
                </div>
                <div className="header__info info">
                    <p className="info__about">О компании</p>
                    <p className="info__shipment">Доставка и оплата</p>
                    <p className="info__returns">Возврат</p>
                    <p className="info__contacts">Контакты</p>
                </div>
            </div>
            <div className="_container header-main">
                <div className="header-main__logo">СУЛТАН</div>
                <div className="header-main__catalogue">КАТАЛОГ</div>
                <div className="header-main__search">ПОИСК</div>
                <div className="header-main__hotline">ХОТЛАЙН</div>
                <div className="header-main__price">ПРАЙС-ЛИСТ</div>
                <div className="header-main__bin">КОРЗИНА</div>
            </div>
        </section>
    );
  }
  
  export default Header;