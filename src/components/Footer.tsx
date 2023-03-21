import './Footer.scss';
import logoWhite from '../assets/icons/logo-white.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import telegram from '../assets/icons/telegram.svg';
import download from '../assets/icons/download.svg'
import visa from '../assets/icons/visa.svg';
import mastercard from '../assets/icons/mastercard.svg';
import arrowRightWhite from '../assets/icons/arrow-right-white.svg';
import ButtonLarge from './UI/Buttons/ButtonLarge';
import SearchLarge from './UI/Forms/SearchLarge';

function Footer() {
    return(
        <footer className="footer-section">
            <div className="_container footer">
                <div className="footer__info-footer info-footer">
                    <a href="#">
                        <img className="info-footer__logo" src={logoWhite} alt="logo" />
                    </a>
                    <div className="info-footer__description">
                        Компания «Султан» — снабжаем <br />
                        розничные магазины товарами <br />
                        "под ключ" в Кокчетаве и Акмолинской <br />
                        области
                    </div>
                    <div className="info-footer__advertisement">Подпишись на скидки и акции</div>
                    <div className=""><SearchLarge placeholder='Введите ваш E-mail' iconSrc={arrowRightWhite} /></div>
                </div>
                <div className="footer__menu-footer menu-footer">
                    <p className="menu-footer__title">Меню сайта:</p>
                    <a className="menu-footer__link" href = "#">О компании</a>
                    <a className="menu-footer__link" href = "#">Доставка и оплата</a>
                    <a className="menu-footer__link" href = "#">Возврат</a>
                    <a className="menu-footer__link" href = "#">Контакты</a>
                </div>
                <div className="footer__categories-footer categories-footer">
                    <p className="categories-footer__title">Категории:</p>
                    <a className="categories-footer__link" href = "#">Бытовая химия</a>
                    <a className="categories-footer__link" href = "#">Косметика и гигиена</a>
                    <a className="categories-footer__link" href = "#">Товары для дома</a>
                    <a className="categories-footer__link" href = "#">Товары для детей и мам</a>
                    <a className="categories-footer__link" href = "#">Посуда</a>
                </div>
                <div className="footer__price price-footer">
                    <p className="price-footer__title">Скачать прайс-лист:</p>
                    <div className=""><ButtonLarge textContent='Прайс-лист' iconSrc={download} /></div>
                    <p className="price-footer__social">Связь в мессенджерах:</p>
                    <div className="price-footer__icons icons">
                        <a href="#">
                            <img className="icons__whatsapp" src={whatsapp} alt="whatsapp" />
                        </a>
                        <a href="#">
                            <img className="icons__telegram" src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
                <div className="footer__contacts-footer contacts-footer">
                    <p className="contacts-footer__title">Контакты:</p>
                    <div className="contacts-footer__call call">
                        <div className="call__number">+7 (777) 490-00-91</div>
                        <div className="call__schedule">время работы: 9:00-20:00</div>
                        <a className="call__order" href="#">Заказать звонок</a>
                    </div>
                    <div className="contacts-footer__email email">
                            <div className="email__address">opt.sultan@mail.ru</div>
                            <div className="email__status">На связи в любое время</div>
                    </div>
                    <div className="contacts-footer__cards cards">
                        <img src={visa} alt="Visa" />
                        <img src={mastercard} alt="MasterCard" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;