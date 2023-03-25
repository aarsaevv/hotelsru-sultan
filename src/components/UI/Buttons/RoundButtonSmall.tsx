import BaseButton from "./BaseButton"

function RoundButtonSmall({ iconSrc = "" }) {
	return (
		<div className="_button-round-small">
			<BaseButton iconSrc={iconSrc} />
		</div>
	)
}

export default RoundButtonSmall
