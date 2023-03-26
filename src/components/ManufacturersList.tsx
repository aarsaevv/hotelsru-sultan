function ManufacturersList(props: any) {
	let set = new Set()
	for (let item of props.data) {
		set.add(item.manufacturer)
	}
	const arr = Array.from(set)
	return (
		<div className="manufacturers__list">
			{arr.map((el: any, idx) => {
				return (
					<div key={idx}>
						<input
							type="checkbox"
							id={el}
							className=""
						/>
						<label htmlFor={el}>{el}</label>
					</div>
				)
			})}
		</div>
	)
}

export default ManufacturersList
