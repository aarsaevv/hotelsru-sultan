import BaseButton from "./BaseButton"

function MobileButton({ iconSrc = "", textContent = "" }) {
	return (
		<div className="_button--mobile">
			<BaseButton
				iconSrc={iconSrc}
				textContent={textContent}
			/>
		</div>
	)
}

export default MobileButton
