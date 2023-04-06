import { useState } from "react"
import "../scss/components/CartItem.scss"
import box from "../assets/icons/box.svg"
import bin from "../assets/icons/bin.svg"
import cartSeparator from "../assets/images/cart-separator.png"
import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge"
import SelectorButtonNarrow from "./UI/Buttons/SelectorButtonNarrow"
import { CartProps } from "../types/types"

function CartItem(props: { el: CartProps; cartItems: CartProps[]; setCartItems: any }) {
	let [cartCount, setCartCount] = useState(props.el.count)
	function handleAddToCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".add-to-cart") || target.closest(".count-selector__plus")) {
			if (props.cartItems.length) {
				let contains = false
				props.cartItems.map((item: { barcode: number; count: number }) => {
					if (props.el.barcode == item.barcode) {
						setCartCount(++cartCount)
						props.el.count = cartCount
						contains = true
					}
				})
				if (!contains) {
					props.cartItems.push({
						imageSrc: props.el.imageSrc,
						size: props.el.size,
						sizeType: props.el.sizeType,
						barcode: props.el.barcode,
						brand: props.el.brand,
						title: props.el.title,
						description: props.el.description,
						price: props.el.price,
						count: 1,
					})
				}
			} else {
				props.cartItems.push({
					imageSrc: props.el.imageSrc,
					size: props.el.size,
					sizeType: props.el.sizeType,
					barcode: props.el.barcode,
					brand: props.el.brand,
					title: props.el.title,
					description: props.el.description,
					price: props.el.price,
					count: 1,
				})
			}
			const stringifiedArr = JSON.stringify(props.cartItems)
			localStorage.setItem("cart", stringifiedArr)
			let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
			cart[0].textContent = (Number(cart[0].textContent) + Number(props.el.price)).toFixed(2)
			cart[1].textContent = (Number(cart[1].textContent) + Number(props.el.price)).toFixed(2)
		}
	}
	function handleSubtractFromCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".count-selector__minus")) {
			if (props.cartItems.length) {
				props.cartItems.map((item: { barcode: number; count: number }) => {
					if (props.el.barcode == item.barcode) {
						if (cartCount > 1) {
							setCartCount(--cartCount)
							props.el.count = cartCount
							const stringifiedArr = JSON.stringify(props.cartItems)
							localStorage.setItem("cart", stringifiedArr)
							let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
							cart[0].textContent = (Number(cart[0].textContent) - Number(props.el.price)).toFixed(2)
							cart[1].textContent = (Number(cart[1].textContent) - Number(props.el.price)).toFixed(2)
						}
					}
				})
			}
		}
	}
	function handleRemoveFromCart(e: React.MouseEvent<HTMLDivElement>) {
		props.setCartItems((cartItems: CartProps[]) => {
			const remainedItems = props.cartItems.filter((el: CartProps) => el.barcode != props.el.barcode)
			const stringifiedCart = JSON.stringify(remainedItems)
			localStorage.setItem("cart", stringifiedCart)
			return remainedItems
		})
		let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price, .order__price")
		cart[0].textContent = (Number(cart[0].textContent) - Number(props.el.price)).toFixed(2)
		cart[1].textContent = (Number(cart[1].textContent) - Number(props.el.price)).toFixed(2)
		cart[2].textContent = ""
	}

	return (
		<div className="wrapper">
			<div className="cart-item">
				<div className="cart-item__cart-information cart-information">
					<div className="cart-information__cart-image cart-image">
						<img
							className="cart-image__image"
							src={props.el.imageSrc}
							alt="DOLCE MILK Крем для ног «Дикий инжир»"
						/>
					</div>
					<div className="cart-information__cart-specification cart-specification">
						<h6 className="cart-specification__value-weight">
							<img
								src={box}
								alt=""
							/>
							{props.el.size}
						</h6>
						<h2 className="cart-specification__name">{props.el.brand + " " + props.el.title}</h2>
						<p className="cart-specification__description">{props.el.description}</p>
					</div>
				</div>
				<div className="cart-item__buy buy">
					<div className="count-selector">
						<div
							onClick={handleSubtractFromCart}
							className="count-selector__minus">
							<SelectorButtonNarrow textContent="-" />
						</div>
						<p>{cartCount}</p>
						<div
							onClick={handleAddToCart}
							className="count-selector__plus">
							<SelectorButtonNarrow textContent="+" />
						</div>
					</div>
					<div className="buy__price">
						<h2 className="price__value">{Number(props.el.price).toFixed(2)} ₸</h2>
					</div>
					<div onClick={handleRemoveFromCart}>
						<RoundButtonLarge iconSrc={bin} />
					</div>
				</div>
			</div>
			<img
				className="cart-line"
				src={cartSeparator}
				alt=""
			/>
		</div>
	)
}

export default CartItem
