import BaseButton from "./BaseButton"

function ButtonSmall({ textContent = "", iconSrc = "" }) {
	return (
		<div className="_button-small">
			<BaseButton
				textContent={textContent}
				iconSrc={iconSrc}
			/>
		</div>
	)
}

export default ButtonSmall
