import React, { useEffect, useRef, useState } from "react"
import Multiselect from "multiselect-react-dropdown"
import { AppProps } from "../../helpers/types"
import "./AdminPanel.scss"

function AdminPanel(props: { data: AppProps[]; setData: any }) {
	/** Показывает и скрывает форму добавления */
	const [show, setShow] = useState(false)
	/** Типы ухода для мультиселекта */
	const careTypes: { name: string; id: number }[] = [
		{
			name: "Уход за телом",
			id: 1,
		},
		{
			name: "Уход за руками",
			id: 2,
		},
		{
			name: "Уход за ногами",
			id: 3,
		},
		{
			name: "Уход за лицом",
			id: 4,
		},
	]
	/** Массив выбранных типов ухода */
	const [selectedValues, setSelectedValues] = useState([])
	/** Стили мультиселекта */
	let multiselectStyle: any = {
		multiselectContainer: {
			width: "360px",
			margin: "0 0 6px 0",
		},
		chips: {
			display: "flex",
			background: "#f0ad4e",
			height: "20px",
		},
		option: {
			display: "flex",
			alignItems: "center",
			gap: "5px",
			border: "1px solid rgba(0,0,0,0.1)",
		},
		searchBox: {
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			margin: "0",
			padding: "5px 0 0 0",
		},
	}
	/** Реф для доступа к методам мультиселекта */
	const dropdownRef: any = useRef()

	/** Меняем массив в зависимости от изменения выбора типов */
	const onSelect = (selectedList: any, selectedItem: any) => {
		setSelectedValues(selectedList)
	}
	const onRemove = (selectedList: any, removedItem: any) => {
		setSelectedValues(selectedList)
	}
	/** Очищаем мультиселект */
	const resetSelectedValues = () => dropdownRef.current.resetSelectedValues()

	/** Функция для отображения и скрытия формы добавления */
	const toggleShow = () => setShow(true)
	const toggleHide = () => setShow(false)

	/** Сразу меняем локальное хранилище при изменении каталога */
	useEffect(() => {
		const stringifiedData = JSON.stringify(props.data)
		localStorage.setItem("catalogue", stringifiedData)
	}, [props.data])

	/** Функция для удаления выбранного товара в каталоге */
	function handleRemoving(e: React.MouseEvent<HTMLButtonElement>) {
		const target = e.target as Element
		if (target) {
			const siblings = target.parentElement?.parentElement?.querySelectorAll("div")
			if (siblings) {
				const id = Number(siblings[1].textContent)
				props.setData(() => props.data.filter((el: { barcode: number }) => el.barcode != id))
			}
		}
	}

	/** Добавление нового товара через форму */
	function addToCatalogue() {
		/** Собираем все формы */
		const inputs = document.querySelectorAll(".admin-panel__add-form input") as NodeListOf<HTMLInputElement>
		const select = document.querySelector("#sizeType") as HTMLSelectElement
		const textarea = document.querySelector("#description") as HTMLTextAreaElement
		/** Создаем объект для последующего добавления */
		const obj: any = {}
		/** Создаем массив невалидных полей */
		const invalidArr: any = []
		/** Собираем тут инпуты по айдишникам */
		for (let input of inputs) {
			if (input.value) {
				obj[input.id] = input.value
			} else {
				/** Если какого-то из полей недостает, собираем массив невалидных полей и выводим их в alert */
				if (input.previousSibling?.textContent) {
					if (!input.previousSibling?.textContent.includes("за")) {
						invalidArr.push(input.previousSibling?.textContent)
					}
				} else {
					invalidArr.push("Типы ухода")
				}
			}
		}

		/** Сообщение валидации */
		if (invalidArr.length) {
			alert(`Не заполнены поля: ${invalidArr.join(", ")}`)
		} else {
			/** Селектор типа размера */
			obj[select.id] = select.value
			/** Форма описания */
			obj[textarea.id] = textarea.value
			/** Делаем нужный нам массив для типов ухода */
			let arrayOfTypes = selectedValues.map((el: any) => (el = el.name))
			/** Добавляем его в объект */
			obj["careType"] = arrayOfTypes

			/** Очищаем нашу форму */
			for (let input of inputs) {
				input.value = ""
			}
			textarea.value = ""
			resetSelectedValues()
			/** Добавляем товар */
			props.setData(() => [...props.data, obj])
			alert("Товар добавлен.")
		}
	}
	/** Решил работать без Redux, поэтому стейт передаю в отрендеренный айтем */
	function CatalogueItem(props: { el: any; idx: number; data: AppProps[]; setData: any }) {
		/** Текущий редактируемый элемент */
		const [el, setEl] = useState(props.el)
		const idx = props.idx
		/** Стейт редактирования */
		const [isEdit, setIsEdit] = useState(false)
		let arrayWithoutOldItem = props.data
		const edit = () => setIsEdit(true)

		const save = () => {
			/** То же самое, что и в добавлении элемента в каталог товаров */
			setIsEdit(false)
			const entries = document.querySelectorAll("input[id^='edit_']") as NodeListOf<HTMLInputElement>
			const textarea = document.querySelector("textarea")
			const select = document.querySelector("#sizeType") as HTMLSelectElement
			const obj: any = {}
			for (let entry of entries) {
				if (entry.id.slice(5) == "barcode") {
					obj[entry.id.slice(5)] = el.barcode
				} else {
					obj[entry.id.slice(5)] = entry.value
				}
			}
			obj[select.id] = select.value
			if (textarea) {
				obj[textarea.id.slice(5)] = textarea.value
			}
			obj.careType = obj.careType.split(", ")
			/** Тут я пошел на некоторого рода уловку с целью отфильтровать массив от уже имеющегося элемента с таким же баркодом */
			arrayWithoutOldItem = arrayWithoutOldItem.filter((el: any) => el.barcode != obj.barcode)
			console.log(obj)
			props.setData(() => {
				return [...arrayWithoutOldItem, obj]
			})
		}

		return (
			<div className="roster__unit unit">
				<div className="unit__number">{idx + 1}</div>
				<div className="unit__barcode">
					{isEdit ? (
						<input
							id="edit_barcode"
							type="number"></input>
					) : (
						el.barcode
					)}
				</div>
				<div className="unit__manufacturer">{isEdit ? <input id="edit_manufacturer"></input> : el.manufacturer}</div>
				<div className="unit__brand">{isEdit ? <input id="edit_brand"></input> : el.brand}</div>
				<div className="unit__title">{isEdit ? <input id="edit_title"></input> : el.title}</div>
				<div className="unit__sizetype">
					{isEdit ? (
						<select id="sizeType">
							<option value="объем, мл">мл</option>
							<option value="масса, г">г</option>
						</select>
					) : (
						el.sizeType
					)}
				</div>
				<div className="unit__size">
					{isEdit ? (
						<input
							id="edit_size"
							type="number"></input>
					) : (
						el.size
					)}
				</div>
				<div className="unit__price">
					{isEdit ? (
						<input
							id="edit_price"
							type="number"></input>
					) : (
						el.price
					)}
				</div>
				<div className="unit__description">{isEdit ? <textarea id="edit_description"></textarea> : el.description}</div>
				<div className="unit__caretype">
					{isEdit ? <input id="edit_careType"></input> : el.careType && el.careType.join(", ")}
				</div>
				<div className="unit__picture">{isEdit ? <input id="edit_picture"></input> : <img src={el.imageSrc} />}</div>
				<div className="unit__edit">
					{isEdit ? <button onClick={save}>SAV</button> : <button onClick={edit}>EDIT</button>}
				</div>
				<div className="unit__remove">
					<button onClick={handleRemoving}>RMV</button>
				</div>
			</div>
		)
	}

	return (
		<div className="_container admin-panel">
			<div className="admin-panel__heading">
				Список товаров ({props.data.length}) <br />{" "}
				<span className="warning">
					Пожалуйста, не меняйте штрихкод у товара. <br /> Товар с новым штрихкодом - другой товар. Таковы правила
					коммерции.
				</span>
			</div>

			{props.data.length ? (
				<div className="admin-panel__roster roster">
					{props.data.map((el: any, idx: number) => {
						return (
							<div key={idx}>
								<CatalogueItem
									el={el}
									idx={idx}
									data={props.data}
									setData={props.setData}
								/>
							</div>
						)
					})}
				</div>
			) : (
				<div className="empty">
					Каталог пуст. <br /> Добавьте товар <br /> или обновите страницу.
				</div>
			)}
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
						type="number"
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
					<textarea id="description" />
					<label htmlFor="careType">Типы ухода</label>
					<Multiselect
						ref={dropdownRef}
						options={careTypes}
						onSelect={onSelect}
						onRemove={onRemove}
						selectedValues={selectedValues}
						hidePlaceholder={true}
						avoidHighlightFirstOption={true}
						style={multiselectStyle}
						placeholder="Выберите типы ухода"
						displayValue="name"
						emptyRecordMsg="Все опции выбраны"
					/>
					<label htmlFor="picture">Картинка (ссылка в формате 'http://.../some.jpg')</label>
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
