import "./Item.scss"
import { Link } from "react-router-dom"
import basketWhite from "../assets/icons/basket-white.svg"
import box from "../assets/icons/box.svg"
import ButtonSmall from "./UI/Buttons/ButtonSmall"
import { useState } from "react"
import CountSelector from "./UI/Buttons/CountSelector"

function Item({ imageSrc, size, brand, title, barcode, manufacturer, price, description, sizeType }: any) {
	const [inCart, setInCart] = useState(false)
	function handleAddToCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target && target.closest("._button-small")) {
			setInCart(!inCart)
			if (localStorage.getItem("cart")) {
				const arr = localStorage.getItem("cart")
				const parsedArr = JSON.parse(arr ? arr : "")
				parsedArr.push({ imageSrc, size, sizeType, barcode, brand, title, description, price, count: 1 })
				const stringifiedArr = JSON.stringify(parsedArr)
				localStorage.setItem("cart", stringifiedArr)
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
				<div
					onClick={handleAddToCart}
					className="purchase__button">
					{inCart ? (
						<CountSelector />
					) : (
						<ButtonSmall
							textContent="В корзину"
							iconSrc={basketWhite}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Item
