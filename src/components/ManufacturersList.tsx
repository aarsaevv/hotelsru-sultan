import { AppProps } from "../helpers/types"

function ManufacturersList(props: { data: AppProps[] }) {
	const set = new Set()
	for (let item of props.data) {
		set.add(item)
	}
	const arr = Array.from(set)
	return (
		<div className="manufacturers__list">
			{arr.map((el: any, idx: number) => {
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
			})}
		</div>
	)
}

export default ManufacturersList
