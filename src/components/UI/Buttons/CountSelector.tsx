import "./CountSelector.scss"
import SelectorButtonNarrow from "../Buttons/SelectorButtonNarrow"

function CountSelector(props: any) {
	let count = props.count
	return (
		<div className="count-selector">
			<SelectorButtonNarrow textContent="-" />
			<p>{count}</p>
			<SelectorButtonNarrow textContent="+" />
		</div>
	)
}

export default CountSelector
