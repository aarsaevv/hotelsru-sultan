import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../scss/components/Header.scss"
import avatar from "../assets/images/avatar.png"
import burger from "../assets/icons/burger.svg"
import cart from "../assets/icons/cart.svg"
import catalogue from "../assets/icons/catalogue.svg"
import download from "../assets/icons/download-white.svg"
import catalogueBlack from "../assets/icons/catalogue-black.svg"
import searchBlack from "../assets/icons/search-black.svg"
import inbox from "../assets/icons/inbox.svg"
import line from "../assets/images/line.png"
import location from "../assets/icons/location.svg"
import logo from "../assets/icons/logo.svg"
import search from "../assets/icons/search.svg"
import ButtonLarge from "./UI/Buttons/ButtonLarge"
import MobileButton from "./UI/Buttons/MobileButton"
import RoundButtonSmall from "./UI/Buttons/RoundButtonSmall"
import SearchLarge from "./UI/Forms/SearchLarge"
import {CartProps} from "../types/types";

function Header(props: { cartItems: CartProps[] }) {
	const [total, setTotal] = useState(0)
	useEffect(() => {
		let orderSum: number = 0
		props.cartItems.map((el: { price: number; count: number }) => {
			if (el.price && el.count) {
				orderSum += el.price * el.count
			}
			if (el.price && !el.count) {
				orderSum += el.price
			}
		})
		setTotal(orderSum)
	}, [])
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
						href="src/components/Header#">
						О компании
					</a>
					<a
						className="info-header__link"
						href="src/components/Header#">
						Доставка и оплата
					</a>
					<a
						className="info-header__link"
						href="src/components/Header#">
						Возврат
					</a>
					<a
						className="info-header__link"
						href="src/components/Header#">
						Контакты
					</a>
					<Link
						to="my_admin"
						className="info-header__admin-panel">
						MY_ADMIN
					</Link>
				</div>
			</div>
			<img
				src={line}
				alt="line"
			/>
			<div className="_container header-main">
				<Link
					className="header-main__burger"
					to="/">
					<RoundButtonSmall iconSrc={burger} />
				</Link>
				<Link to="/">
					<img
						className="header-main__logo"
						src={logo}
						alt="logo"
					/>
				</Link>
				<div className="header-main__cart--mobile header-cart--mobile">
					<Link
						to="/cart"
						className="header-cart__header-info-cart--mobile header-info-cart--mobile">
						<img
							className="header-info-cart__icon"
							src={cart}
							alt="cart"></img>
						<div className="">
							<div className="header-info-cart__name">Корзина</div>
							<div className="header-info-cart__price">{total == 0 ? "0.00" : total.toFixed(2)}</div>
						</div>
					</Link>
				</div>
				<div className="header-main__catalogue">
					<Link to="/catalogue">
						<ButtonLarge
							textContent="Каталог"
							iconSrc={catalogue}
						/>
						<MobileButton
							textContent="Каталог"
							iconSrc={catalogueBlack}
						/>
						<MobileButton
							textContent="Поиск"
							iconSrc={searchBlack}
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
						<div className="info-contacts__schedule">время работы: 9:00-20:00</div>
						<a
							className="info-contacts__call"
							href="src/components/Header#">
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
						className="header-cart__header-info-cart header-info-cart">
						<img
							className="header-info-cart__icon"
							src={cart}
							alt="cart"></img>
						<div className="">
							<div className="header-info-cart__name">Корзина</div>
							<div className="header-info-cart__price">{total == 0 ? "0.00" : total.toFixed(2)}</div>
						</div>
					</Link>
				</div>
			</div>
			<img
				className="header-section__line"
				src={line}
				alt="line"
			/>
		</header>
	)
}

export default Header
