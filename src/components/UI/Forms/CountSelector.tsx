import "./CountSelector.scss"
import SelectorButtonNarrow from "../Buttons/SelectorButtonNarrow"

function CountSelector() {
	return (
		<div className="count-selector">
			<SelectorButtonNarrow textContent="-" />
			<p>1</p>
			<SelectorButtonNarrow textContent="+" />
		</div>
	)
}

export default CountSelector
