import React, { useEffect, useState } from "react"
import "./AdminPanel.scss"

function AdminPanel(props: { data: any }) {
	const [data, setData] = useState(props.data)
	const [show, setShow] = useState(false)

	const toggleShow = () => setShow(true)
	const toggleHide = () => setShow(false)

	useEffect(() => {
		const stringifiedData = JSON.stringify(data)
		localStorage.setItem("catalogue", stringifiedData)
	}, [data])

	function handleEditing(e: React.MouseEvent<HTMLButtonElement>) {
		const target = e.target as Element
	}

	function handleRemoving(e: React.MouseEvent<HTMLButtonElement>) {
		const target = e.target as Element
		if (target) {
			const siblings = target.parentElement?.parentElement?.querySelectorAll("div")
			if (siblings) {
				const id = Number(siblings[1].textContent)
				setData((data: any) => data.filter((el: { barcode: number }) => el.barcode != id))
			}
		}
	}

	function addToCatalogue() {
		const inputs = document.querySelectorAll(".admin-panel__add-form input") as NodeListOf<HTMLInputElement>
		const select = document.querySelector("#sizeType") as HTMLSelectElement
		const obj: any = {}
		for (let input of inputs) {
			obj[input.id] = input.value
			if (input.id == "careType") {
				obj[input.id] = Array.from(input.value)
			}
		}
		obj[select.id] = select.value
		setData((data: any) => [...data, obj])
	}
	return (
		<div className="_container admin-panel">
			<div className="admin-panel__heading">Список товаров ({data.length})</div>
			<div className="admin-panel__roster roster">
				{data.length &&
					data.map((el: any, idx: number) => {
						return (
							<div key={idx}>
								<div className="roster__unit unit">
									<div className="unit__number">{idx + 1}</div>
									<div className="unit__barcode">{el.barcode}</div>
									<div className="unit__manufacturer">{el.manufacturer}</div>
									<div className="unit__brand">{el.brand}</div>
									<div className="unit__title">{el.title}</div>
									<div className="unit__sizetype">{el.sizeType}</div>
									<div className="unit__size">{el.size}</div>
									<div className="unit__price">{el.price}</div>
									<div className="unit__description">{el.description}</div>
									<div className="unit__caretype">{el.careType}</div>
									<div className="unit__picture">
										<img src={el.imageSrc} />
									</div>
									<div className="unit__edit">
										<button onClick={handleEditing}>EDT</button>
									</div>
									<div className="unit__remove">
										<button onClick={handleRemoving}>RMV</button>
									</div>
								</div>
							</div>
						)
					})}
			</div>
			{!show && (
				<button
					onClick={toggleShow}
					className="admin-panel__add-item">
					Добавить товар
				</button>
			)}
			{show && (
				<div className="admin-panel__add-form">
					<label htmlFor="barcode">Штрихкод</label>
					<input
						id="barcode"
						type="text"
					/>
					<label htmlFor="manufacturer">Производитель</label>
					<input
						id="manufacturer"
						type="text"
					/>
					<label htmlFor="brand">Бренд</label>
					<input
						id="brand"
						type="text"
					/>
					<label htmlFor="title">Название</label>
					<input
						id="title"
						type="text"
					/>
					<label htmlFor="sizeType">Тип размера</label>
					<select id="sizeType">
						<option value="объем, мл">мл</option>
						<option value="масса, г">г</option>
					</select>
					<label htmlFor="size">Размер</label>
					<input
						id="size"
						type="number"
					/>
					<label htmlFor="price">Цена</label>
					<input
						id="price"
						type="number"
					/>
					<label htmlFor="description">Описание</label>
					<input
						id="description"
						type="text"
					/>
					<label htmlFor="careType">Типы ухода(РЕАЛИЗОВАТЬ)</label>
					<input
						id="careType"
						type="text"
					/>
					<label htmlFor="description">Картинка (ссылка)</label>
					<input
						id="imageSrc"
						type="text"
					/>
					<button
						onClick={addToCatalogue}
						className="admin-panel__add-item">
						Добавить товар
					</button>
					<button
						onClick={toggleHide}
						className="admin-panel__add-item">
						Закрыть форму
					</button>
				</div>
			)}
		</div>
	)
}

export default AdminPanel
