import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Cart.scss"
import bin from "../../assets/icons/bin.svg"
import ButtonLarge from "../UI/Buttons/ButtonLarge"
import CartItem from "../CartItem"
import Modal from "../UI/Modals/Modal"

function Cart(props: { cartItems: any; setCartItems: any }) {
	const cartItems = props.cartItems
	const [showModal, setShowModal] = useState(false)

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
						{cartItems.map((el: any, idx: number) => {
							return (
								<CartItem
									key={idx}
									imageSrc={el.imageSrc}
									size={el.size}
									sizeType={el.sizeType}
									brand={el.brand + " "}
									title={el.title}
									barcode={el.barcode}
									price={el.price * el.count}
									description={el.description}
									iconSrc={bin}
									count={el.count}
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
