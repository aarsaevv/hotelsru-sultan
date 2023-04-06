import "../scss/components/Item.scss"
import { Link } from "react-router-dom"
import basketWhite from "../assets/icons/basket-white.svg"
import box from "../assets/icons/box.svg"
import ButtonSmall from "./UI/Buttons/ButtonSmall"
import { useState } from "react"
import SelectorButtonNarrow from "./UI/Buttons/SelectorButtonNarrow"
import { CartProps, CatalogueProps } from "../types/types"

function Item(props: { el: CatalogueProps; cartItems: CartProps[]; setCartItems: any }) {
	const [inCart, setInCart] = useState(false)
	let [count, setCount] = useState(1)

	function handleAddToCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".add-to-cart") || target.closest(".count-selector__plus")) {
			setInCart(true)
			if (props.cartItems.length) {
				let contains = false
				props.cartItems.map((el: { barcode: number; count: number }) => {
					if (el.barcode == props.el.barcode) {
						setCount(++count)
						el.count = count
						contains = true
					}
				})
				if (!contains) {
					props.cartItems.push({
						barcode: props.el.barcode,
						brand: props.el.brand,
						count: 1,
						description: props.el.description,
						imageSrc: props.el.imageSrc,
						price: props.el.price,
						size: String(props.el.size + " " + props.el.sizeType.split(", ")[1]),
						sizeType: props.el.sizeType,
						title: props.el.title,
					})
				}
			} else {
				props.cartItems.push({
					barcode: props.el.barcode,
					brand: props.el.brand,
					count: 1,
					description: props.el.description,
					imageSrc: props.el.imageSrc,
					price: props.el.price,
					size: String(props.el.size + " " + props.el.sizeType.split(", ")[1]),
					sizeType: props.el.sizeType,
					title: props.el.title,
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
			const json: string | null = localStorage.getItem("cart")
			const parsedJSON: CartProps[] = JSON.parse(json ? json : "[]")
			if (parsedJSON.length) {
				parsedJSON.map((el: { barcode: number; count: number }) => {
					if (el.barcode == props.el.barcode) {
						if (count > 1) {
							setCount(--count)
							el.count = count
							const stringifiedArr = JSON.stringify(parsedJSON)
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
	return (
		<div className="item">
			<img
				className="item__image"
				src={props.el.imageSrc}
				alt={props.el.brand}
			/>
			<div className="item__description description">
				<h6 className="description__weight">
					<img
						src={box}
						alt=""
					/>
					{props.el.size}
				</h6>
				<Link to={`/catalogue/${props.el.barcode}`}>
					<h3 className="description__name">
						<span>{props.el.brand}</span> {props.el.title}
					</h3>
				</Link>
				<h5 className="description__manufacturer">
					Штрихкод:<span>{props.el.barcode}</span>
				</h5>
				<h5 className="description__barcode">
					Производитель:<span>{props.el.manufacturer}</span>
				</h5>
				<h5 className="description__brand">
					Бренд:<span>{props.el.brand}</span>
				</h5>
			</div>
			<div className="purchase">
				<h3 className="purchase__price">{Number(props.el.price).toFixed(2)} ₸</h3>

				<div className="purchase__button">
					{inCart ? (
						<div>
							<div className="count-selector">
								<div
									onClick={handleSubtractFromCart}
									className="count-selector__minus">
									<SelectorButtonNarrow textContent="-" />
								</div>
								<p>{count}</p>
								<div
									onClick={handleAddToCart}
									className="count-selector__plus">
									<SelectorButtonNarrow textContent="+" />
								</div>
							</div>
						</div>
					) : (
						<div
							onClick={handleAddToCart}
							className="add-to-cart">
							<ButtonSmall
								textContent="В корзину"
								iconSrc={basketWhite}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Item
