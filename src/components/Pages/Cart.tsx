import { useState } from "react"
import { Link } from "react-router-dom"
import "./Cart.scss"
import bin from "../../assets/icons/bin.svg"
import ButtonLarge from "../UI/Buttons/ButtonLarge"
import CartItem from "../CartItem"

function Cart() {
	const cartJSON: any = JSON.parse(localStorage.getItem("cart") || "")
	const [cartItems, setCartItems] = useState(cartJSON)

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
				{cartItems.map((el: any, idx: number) => {
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
							count={el.count}
						/>
					)
				})}
			</div>
			{cartItems.length ? (
				<div className="cart__order order">
					<ButtonLarge textContent="Оформить заказ" />
					<h2 className="order__price">
						{cartItems.reduce((total: number, curr: { price: number }) => total + curr.price, 0).toFixed(2)} ₸
					</h2>
				</div>
			) : (
				<div className="cart__empty empty">
					<span className="empty__message">Корзина пуста.</span> <br />
					<Link
						to="/catalogue"
						className="empty__link">
						В каталог
					</Link>
				</div>
			)}
		</div>
	)
}

export default Cart
