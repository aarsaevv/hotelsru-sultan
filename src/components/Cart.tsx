import "./Cart.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import bin from "../assets/icons/bin.svg"
import ButtonLarge from "./UI/Buttons/ButtonLarge"
import CartItem from "./CartItem"

function Cart({ json = [{}] }) {
	const [itemsJSON, setItemsJSON] = useState(json)

	return (
		<div className="_container cart">
			<div className="cart__breadcrumbs">
				<Link to="/">Главная | </Link>
				<span>
					<Link to="">Корзина</Link>
				</span>
			</div>
			<div className="cart__heading heading">
				<h1 className="heading__title">КОРЗИНА</h1>
			</div>
			<div className="cart__list">
				{itemsJSON.map((el: any, idx: number) => {
					return (
						<CartItem
							key={idx}
							imageSrc={el.imageSrc}
							size={el.size + " " + el.sizeType.split(", ")[1]}
							brand={el.brand + " "}
							title={el.title}
							barcode={el.barcode}
							price={el.price}
							description={el.description}
							iconSrc={bin}
						/>
					)
				})}
			</div>
			<div className="cart__order order">
				<ButtonLarge textContent="Оформить заказ" />
				<h2 className="order__price">1234,56 ₸</h2>
			</div>
		</div>
	)
}

export default Cart
