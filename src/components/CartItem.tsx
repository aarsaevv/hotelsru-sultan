import { useState } from "react"
import "./CartItem.scss"
import box from "../assets/icons/box.svg"
import bin from "../assets/icons/bin.svg"
import cartSeparator from "../assets/images/cart-separator.png"
import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge"
import SelectorButtonNarrow from "./UI/Buttons/SelectorButtonNarrow"
import { AppProps } from "../helpers/types"

function CartItem({
	barcode,
	brand,
	cartItems,
	count,
	description,
	imageSrc,
	price,
	setCartItems,
	size,
	sizeType,
	title,
}: any) {
	let [cartCount, setCartCount] = useState(count)
	function handleAddToCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".add-to-cart") || target.closest(".count-selector__plus")) {
			if (cartItems.length) {
				let contains = false
				cartItems.map((el: { barcode: number; count: number }) => {
					if (el.barcode == barcode) {
						setCartCount(++cartCount)
						el.count = cartCount
						contains = true
					}
				})
				if (!contains) {
					cartItems.push({ imageSrc, size, sizeType, barcode, brand, title, description, price, count: 1 })
				}
			} else {
				cartItems.push({ imageSrc, size, sizeType, barcode, brand, title, description, price, count: 1 })
			}
			const stringifiedArr = JSON.stringify(cartItems)
			localStorage.setItem("cart", stringifiedArr)
			let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
			cart[0].textContent = (Number(cart[0].textContent) + Number(price)).toFixed(2)
			cart[1].textContent = (Number(cart[1].textContent) + Number(price)).toFixed(2)
		}
	}
	function handleSubtractFromCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".count-selector__minus")) {
			if (cartItems.length) {
				cartItems.map((el: { barcode: number; count: number }) => {
					if (el.barcode == barcode) {
						if (cartCount > 1) {
							setCartCount(--cartCount)
							el.count = cartCount
							const stringifiedArr = JSON.stringify(cartItems)
							localStorage.setItem("cart", stringifiedArr)
							let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
							cart[0].textContent = (Number(cart[0].textContent) - Number(price)).toFixed(2)
							cart[1].textContent = (Number(cart[1].textContent) - Number(price)).toFixed(2)
						}
					}
				})
			}
		}
	}
	function handleRemoveFromCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		cartItems = cartItems.filter((el: AppProps) => el.barcode != barcode)
		setCartItems(cartItems)
		const stringifiedArr = JSON.stringify(cartItems)
		localStorage.setItem("cart", stringifiedArr)
		let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price, .order__price")
		cart[0].textContent = (Number(cart[0].textContent) - Number(price)).toFixed(2)
		cart[1].textContent = (Number(cart[1].textContent) - Number(price)).toFixed(2)
		cart[2].textContent = ""
	}

	return (
		<div className="wrapper">
			<div className="cart-item">
				<div className="cart-item__cart-information cart-information">
					<div className="cart-information__cart-image cart-image">
						<img
							className="cart-image__image"
							src={imageSrc}
							alt="DOLCE MILK Крем для ног «Дикий инжир»"
						/>
					</div>
					<div className="cart-information__cart-specification cart-specification">
						<h6 className="cart-specification__value-weight">
							<img
								src={box}
								alt=""
							/>
							{size}
						</h6>
						<h2 className="cart-specification__name">{brand + title}</h2>
						<p className="cart-specification__description">{description}</p>
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
						<h2 className="price__value">{Number(price).toFixed(2)} ₸</h2>
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
