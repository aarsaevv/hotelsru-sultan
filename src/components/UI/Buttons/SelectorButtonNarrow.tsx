import "../../../scss/components/SelectorButton.scss"
import BaseButton from "./BaseButton"

function SelectorButtonNarrow({ textContent = "" }) {
	return (
		<div className="_selector-narrow">
			<BaseButton textContent={textContent} />
		</div>
	)
}

export default SelectorButtonNarrow
