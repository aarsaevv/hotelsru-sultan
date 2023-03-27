import { useState } from "react"
import { AppProps } from "../helpers/types"

function ManufacturersList(props: { data: AppProps[] }) {
	const [showAll, setShowAll] = useState(false)
	const set = new Set()
	for (let item of props.data) {
		set.add(item)
	}
	const arr = Array.from(set)
	const button = document.querySelector(".collapse-button") as HTMLButtonElement
	button?.addEventListener("click", () => {
		setShowAll(!showAll)
		button.style.display = "none"
	})

	return (
		<div className="manufacturers__list">
			{arr.map((el: any, idx: number) => {
				if (showAll == false) {
					while (idx < 3) {
						return (
							<div key={idx}>
								<input
									type="checkbox"
									id={el}
									className="list__checkbox"
								/>
								<label
									htmlFor={el}
									className="">
									{el}
								</label>
							</div>
						)
					}
				} else {
					return (
						<div key={idx}>
							<input
								type="checkbox"
								id={el}
								className="list__checkbox"
							/>
							<label
								htmlFor={el}
								className="">
								{el}
							</label>
						</div>
					)
				}
			})}
			<button className="collapse-button">Показать все ⏷</button>
		</div>
	)
}

export default ManufacturersList
