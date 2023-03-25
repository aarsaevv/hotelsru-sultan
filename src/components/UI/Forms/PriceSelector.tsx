import "./PriceSelector.scss"
import SelectorButtonWide from "../Buttons/SelectorButtonWide"

function PriceSelector() {
	return (
		<div className="price-selector">
			<SelectorButtonWide textContent="0" />
			<p>-</p>
			<SelectorButtonWide textContent="10000" />
		</div>
	)
}

export default PriceSelector
