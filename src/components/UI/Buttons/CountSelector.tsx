//@ts-nocheck
import "./CountSelector.scss"
import SelectorButtonNarrow from "../Buttons/SelectorButtonNarrow"

function CountSelector(props: object) {
	return (
		<div className="count-selector">
			<SelectorButtonNarrow textContent="-" />
			<p>{props.count}</p>
			<SelectorButtonNarrow textContent="+" />
		</div>
	)
}

export default CountSelector
