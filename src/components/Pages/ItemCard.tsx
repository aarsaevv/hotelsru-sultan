import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { AppProps } from "../../helpers/types"
import "./ItemCard.scss"
import basketWhite from "../../assets/icons/basket-white.svg"
import box from "../../assets/icons/box.svg"
import download from "../../assets/icons/download.svg"
import share from "../../assets/icons/share.svg"
import ButtonMedium from "../UI/Buttons/ButtonMedium"
import SelectorButtonNarrow from "../UI/Buttons/SelectorButtonNarrow"

function ItemCard(props: { data: AppProps[]; cartItems: any }) {
	const params = useParams()
	const [itemCards, setItemCards] = useState(props.data)

	const imageSrc = itemCards[0].imageSrc
	const size = itemCards[0].size
	const sizeType = itemCards[0].sizeType
	const barcode = itemCards[0].barcode
	const brand = itemCards[0].brand
	const title = itemCards[0].title
	const description = itemCards[0].description
	const price = itemCards[0].price
	const careType = itemCards[0].careType

	const cartItems = props.cartItems
	const [inCart, setInCart] = useState(false)
	let [count, setCount] = useState(1)

	useEffect(() => {
		let id = Object.values(params).join("")
		let copyItemCards = [...itemCards]
		copyItemCards = copyItemCards.filter((el: { barcode: string | number }) => el.barcode == id)
		setItemCards(copyItemCards)
	}, [])

	function handleAddToCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest("._button-medium") || target.closest(".count-selector__plus")) {
			setInCart(!inCart)

			if (cartItems.length) {
				let contains = false
				cartItems.map((el: { barcode: number; count: number }) => {
					if (el.barcode == barcode) {
						setCount(++count)
						el.count = count
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
	function handleRemoveFromCart(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as Element
		if (target.closest(".count-selector__minus")) {
			const json: any = localStorage.getItem("cart")
			const parsedJSON: any[] = JSON.parse(json ? json : "[]")
			if (parsedJSON.length) {
				parsedJSON.map((el: { barcode: number; count: number }) => {
					if (el.barcode == barcode) {
						if (count > 1) {
							setCount(--count)
							el.count = count
							const stringifiedArr = JSON.stringify(parsedJSON)
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
		<div className="_container item-card">
			<div className="item-card__breadcrumbs">
				<Link to="/">Главная | </Link>
				<span>
					<Link to="/catalogue">Каталог | </Link>
				</span>
				<span>
					<Link to="">ТОВАР</Link>
				</span>
			</div>
			<div className="item-card__product product">
				<div className="product__image">
					<img
						src={itemCards[0].imageSrc}
						alt="Картинка товара"
					/>
				</div>
				<div className="product__product-info product-info">
					<h5 className="product-info__available">В наличии</h5>
					<h2 className="product-info__name">
						<span>{itemCards[0].brand}</span> {itemCards[0].title}
					</h2>
					<h6 className="product-info__value-weight">
						<img
							src={box}
							alt=""
						/>
						{itemCards[0].size + " " + itemCards[0].sizeType.split(", ")[1]}
					</h6>
					<div className="product-info__cart cart">
						<h2 className="cart__price">{Number(itemCards[0].price).toFixed(2)} ₸</h2>
						<div>
							<div className="count-selector">
								<div
									onClick={handleRemoveFromCart}
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
						<div onClick={handleAddToCart}>
							<ButtonMedium
								onClick={handleAddToCart}
								textContent="В корзину"
								iconSrc={basketWhite}
							/>
						</div>
					</div>
					<div className="product-info__share-price share-price">
						<div className="share-price__buttons buttons">
							<div className="buttons__share">
								<img
									src={share}
									alt="Share"
								/>
							</div>
							<div className="buttons__advertisement advertisement">
								<h6 className="advertisement__text">
									При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
								</h6>
							</div>
							<div className="buttons__price price">
								<a
									href="#"
									className="price__anchor">
									Прайс-лист
								</a>
								<img
									src={download}
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="product-info__info info">
						<h5 className="info__manufacturer">
							Производитель: <span>{itemCards[0].manufacturer}</span>
						</h5>
						<h5 className="info__brand">
							Бренд: <span>{itemCards[0].brand}</span>
						</h5>
						<h5 className="info__vendor">
							Артикул: <span>{itemCards[0].barcode}</span>
						</h5>
						<h5 className="info__barcode">
							Штрихкод: <span>{itemCards[0].barcode}</span>
						</h5>
						<div className="info__description card-description">
							<h3 className="card-description__heading">Описание</h3>
							<p className="card-description__text">{itemCards[0].description}</p>
						</div>
						<div className="info__characteristics characteristics">
							<h3 className="characteristics__heading">Характеристики</h3>
							<h5 className="characteristics__purpose">
								Назначение: <span>{itemCards[0].manufacturer}</span>
							</h5>
							<h5 className="characteristics__type">
								Тип: <span>{itemCards[0].careType.join(", ")}</span>
							</h5>
							<h5 className="characteristics__manufacturer">
								Производитель: <span>{itemCards[0].manufacturer}</span>
							</h5>
							<h5 className="characteristics__brand">
								Бренд: <span>{itemCards[0].brand}</span>
							</h5>
							<h5 className="characteristics__vendor">
								Артикул: <span>{itemCards[0].barcode}</span>
							</h5>
							<h5 className="characteristics__barcode">
								Штрихкод: <span>{itemCards[0].barcode}</span>
							</h5>
							<h5 className="characteristics__value">
								Вес: <span>{itemCards[0].size + " " + itemCards[0].sizeType.split(", ")[1]}</span>
							</h5>
							<h5 className="characteristics__weight">
								Объем: <span>{itemCards[0].size + " " + itemCards[0].sizeType.split(", ")[1]}</span>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ItemCard
