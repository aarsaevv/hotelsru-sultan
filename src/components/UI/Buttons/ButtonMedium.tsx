import BaseButton from "./BaseButton"

function ButtonMedium({ textContent = "", iconSrc = "" }) {
	return (
		<div className="_button-medium">
			<BaseButton
				textContent={textContent}
				iconSrc={iconSrc}
			/>
		</div>
	)
}

export default ButtonMedium
