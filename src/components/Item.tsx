import "./Item.scss"
import { Link } from "react-router-dom"
import basketWhite from "../assets/icons/basket-white.svg"
import box from "../assets/icons/box.svg"
import ButtonSmall from "./UI/Buttons/ButtonSmall"
import { useState } from "react"
import SelectorButtonNarrow from "./UI/Buttons/SelectorButtonNarrow"

function Item({ imageSrc, size, brand, title, barcode, manufacturer, price, description, sizeType, cartData }: any) {
	const [inCart, setInCart] = useState(false)
	let [count, setCount] = useState(1)

	function handleAddToCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".add-to-cart") || target.closest(".count-selector__plus")) {
			setInCart(true)
			if (cartData.length) {
				let contains = false
				cartData.map((el: { barcode: number; count: number }) => {
					if (el.barcode == barcode) {
						setCount(++count)
						el.count = count
						contains = true
					}
				})
				if (!contains) {
					cartData.push({ imageSrc, size, sizeType, barcode, brand, title, description, price, count: 1 })
				}
			} else {
				cartData.push({ imageSrc, size, sizeType, barcode, brand, title, description, price, count: 1 })
			}

			const stringifiedArr = JSON.stringify(cartData)
			localStorage.setItem("cart", stringifiedArr)
			let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
			cart[0].textContent = (Number(cart[0].textContent) + price).toFixed(2)
			cart[1].textContent = (Number(cart[1].textContent) + price).toFixed(2)
		}
	}
	function handleSubtractFromCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".count-selector__minus")) {
			const arr: any = localStorage.getItem("cart")
			const parsedArr: any[] = JSON.parse(arr ? arr : "[]")
			if (parsedArr.length) {
				parsedArr.map((el: { barcode: number; count: number }) => {
					if (el.barcode == barcode) {
						if (count > 1) {
							setCount(--count)
							el.count = count
							const stringifiedArr = JSON.stringify(parsedArr)
							localStorage.setItem("cart", stringifiedArr)
							let cart: NodeListOf<HTMLDivElement> = document.querySelectorAll(".header-info-cart__price")
							cart[0].textContent = (Number(cart[0].textContent) - price).toFixed(2)
							cart[1].textContent = (Number(cart[1].textContent) - price).toFixed(2)
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
				src={imageSrc}
				alt={brand}
			/>
			<div className="item__description description">
				<h6 className="description__weight">
					<img
						src={box}
						alt=""
					/>
					{size}
				</h6>
				<Link to={`/catalogue/${barcode}`}>
					<h3 className="description__name">
						<span>{brand}</span> {title}
					</h3>
				</Link>
				<h5 className="description__manufacturer">
					Штрихкод:<span>{barcode}</span>
				</h5>
				<h5 className="description__barcode">
					Производитель:<span>{manufacturer}</span>
				</h5>
				<h5 className="description__brand">
					Бренд:<span>{brand}</span>
				</h5>
			</div>
			<div className="purchase">
				<h3 className="purchase__price">{Number(price).toFixed(2)} ₸</h3>

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
