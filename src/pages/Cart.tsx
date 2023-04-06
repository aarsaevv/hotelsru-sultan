import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../scss/pages/Cart.scss"
import ButtonLarge from "../components/UI/Buttons/ButtonLarge"
import CartItem from "../components/CartItem"
import Modal from "../components/UI/Modals/Modal"
import { CartProps } from "../types/types"

function Cart(props: { cartItems: CartProps[]; setCartItems: any }) {
	const cartItems = props.cartItems
	const [showModal, setShowModal] = useState(false)
	/** Здесь я тоже решил обойтись без библиотек и сделал через старый трюк с маской из псевдоэлемента before */
	useEffect(() => {
		const modal = document.querySelector(".modal") as HTMLDivElement
		if (modal) {
			modal.style.zIndex = "1000"
		}
	}, [showModal])
	const handleCloseModal = () => {
		setShowModal(false)
		const app = document.querySelector(".App")
		const body = document.querySelector("body")
		if (body) {
			body.style.overflow = "visible"
		}
		app?.classList.remove("mask")
	}
	/** Показываем модалку, чистим стейт, чистим сторадж, запрещаем скролл. */
	const handleOrder = () => {
		setShowModal(true)
		props.setCartItems([])
		window.scrollTo(0, 0)
		const app = document.querySelector(".App")
		const body = document.querySelector("body")
		let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
		if (body) {
			body.style.overflow = "hidden"
		}
		app?.classList.add("mask")
		localStorage.setItem("cart", "[]")
		cart[0].textContent = Number(0).toFixed(2)
		cart[1].textContent = Number(0).toFixed(2)
	}

	return (
		<div className="_container cart">
			{showModal && (
				<Modal
					showModal={showModal}
					handleCloseModal={handleCloseModal}
				/>
			)}
			{!showModal && (
				<div>
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
						{cartItems.map((el: CartProps, idx: number) => {
							return (
								<CartItem
									el={el}
									key={idx}
									cartItems={props.cartItems}
									setCartItems={props.setCartItems}
								/>
							)
						})}
					</div>
					{cartItems.length ? (
						<div className="cart__order order">
							<div onClick={handleOrder}>
								<ButtonLarge textContent="Оформить заказ" />
							</div>
							<h2 className="order__price">
								{cartItems
									.reduce((total: number, curr: { price: number; count: number }) => total + curr.price * curr.count, 0)
									.toFixed(2)}{" "}
								₸
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
			)}
		</div>
	)
}

export default Cart
