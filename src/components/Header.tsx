import "./Header.scss"
import { Link } from "react-router-dom"
import avatar from "../assets/images/avatar.png"
import ButtonLarge from "./UI/Buttons/ButtonLarge"
import cart from "../assets/icons/cart.svg"
import catalogue from "../assets/icons/catalogue.svg"
import download from "../assets/icons/download.svg"
import inbox from "../assets/icons/inbox.svg"
import line from "../assets/images/line.png"
import location from "../assets/icons/location.svg"
import logo from "../assets/icons/logo.svg"
import search from "../assets/icons/search.svg"
import SearchLarge from "./UI/Forms/SearchLarge"

function Header() {
	return (
		<header className="header-section">
			<div className="_container header">
				<div className="header__contacts contacts">
					<div className="contacts__address address">
						<img
							className="address__icon"
							src={location}
							alt="location"
						/>
						<div className="address__text">
							г. Кокчетав, ул. Ж.Ташенова, 129Б <br />
							<span>(Рынок Восточный)</span>
						</div>
					</div>
					<div className="contacts__email email">
						<img
							className="email__logo"
							src={inbox}
							alt="inbox"
						/>
						<div className="email__text">
							opt.sultan@mail.ru <br />
							<span>На связи в любое время</span>
						</div>
					</div>
				</div>
				<div className="header__info-header info-header">
					<a
						className="info-header__link"
						href="#"
					>
						О компании
					</a>
					<a
						className="info-header__link"
						href="#"
					>
						Доставка и оплата
					</a>
					<a
						className="info-header__link"
						href="#"
					>
						Возврат
					</a>
					<a
						className="info-header__link"
						href="#"
					>
						Контакты
					</a>
				</div>
			</div>
			<img
				src={line}
				alt="line"
			/>
			<div className="_container header-main">
				<Link to="/">
					<img
						className="header-main__logo"
						src={logo}
						alt="logo"
					/>
				</Link>
				<div className="header-main__catalogue">
					<Link to="/catalogue">
						<ButtonLarge
							textContent="Каталог"
							iconSrc={catalogue}
						/>
					</Link>
				</div>
				<div className="header-main__search">
					<SearchLarge
						placeholder="Поиск..."
						iconSrc={search}
					/>
				</div>
				<div className="header-main__hotline-header hotline-header">
					<div className="hotline-header__info-contacts info-contacts">
						<div className="info-contacts__number">+7 (777) 490-00-91</div>
						<div className="info-contacts__schedule">
							время работы: 9:00-20:00
						</div>
						<a
							className="info-contacts__call"
							href="#"
						>
							Заказать звонок
						</a>
					</div>
					<img
						className="hotline__avatar"
						src={avatar}
						alt="avatar"
					/>
				</div>
				<div className="header-main__price-header">
					<ButtonLarge
						textContent="Прайс-лист"
						iconSrc={download}
					/>
				</div>
				<div className="header-main__cart header-cart">
					<Link
						to="/cart"
						className="header-cart__header-info-cart header-info-cart"
					>
						<img
							className="header-info-cart__icon"
							src={cart}
							alt="cart"
						></img>
						<div className="">
							<div className="header-info-cart__name">Корзина</div>
							<div className="header-info-cart__price">12 478 ₸</div>
						</div>
					</Link>
				</div>
			</div>
			<img
				src={line}
				alt="line"
			/>
		</header>
	)
}

export default Header
