import "../../../scss/components/PriceSelector.scss"

function PriceSelector() {
	return (
		<div className="price-selector">
			<input
				id="price-low"
				type="number"
				placeholder="1000"
			/>
			<p>-</p>
			<input
				id="price-high"
				type="number"
				placeholder="10000"
			/>
		</div>
	)
}

export default PriceSelector
