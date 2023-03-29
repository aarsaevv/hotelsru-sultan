import "./CartItem.scss"
import box from "../assets/icons/box.svg"
import cartSeparator from "../assets/images/cart-separator.png"
import CountSelector from "./UI/Buttons/CountSelector"
import RoundButtonLarge from "./UI/Buttons/RoundButtonLarge"

function CartItem({
	iconSrc = "",
	imageSrc = "",
	size = "",
	brand = "",
	title = "",
	price = "",
	description = "",
	count = 0,
}) {
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
					<CountSelector count={count} />
					<div className="buy__price">
						<h2 className="price__value">{Number(price).toFixed(2)} ₸</h2>
					</div>
					<RoundButtonLarge iconSrc={iconSrc} />
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
