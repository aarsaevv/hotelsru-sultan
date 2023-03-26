import { useEffect, useState } from "react"
import "./Catalogue.scss"
import bin from "../../assets/icons/bin.svg"
import ButtonMedium from "../UI/Buttons/ButtonMedium"
import Item from "../Item"
import Paginator from "../UI/Buttons/Paginator"
import PriceSelector from "../UI/Forms/PriceSelector"
import RoundButtonLarge from "../UI/Buttons/RoundButtonLarge"
import Manufacturers from "../Manufacturers"

function Catalogue(props: any) {
	/** Создаем стейт из данных */
	const [items, setItems] = useState(props.data)
	/** Стейт текущей страницы каталога */
	const [currentPage, setCurrentPage] = useState(1)
	/** Сколько товаров должно быть на каждой странице */
	const [itemsPerPage, setItemsPerPage] = useState(6)
	/** Индекс последней вещи в разбитом массиве */
	const lastItemIndex = currentPage * itemsPerPage
	/** Индекс первой вещи в разбитом массиве */
	const firstItemIndex = lastItemIndex - itemsPerPage
	/** Разбитый массив */
	const currentItems = items.slice(firstItemIndex, lastItemIndex)
	/** Создаем массив из типов ухода */
	let careTypesArray: { name: string; id: string }[] = [
		{ name: "Уход за телом", id: "care__body" },
		{ name: "Уход за руками", id: "care__hands" },
		{ name: "Уход за ногами", id: "care__legs" },
		{ name: "Уход за лицом", id: "care__face" },
	]
	/** И из типов сортировок */
	let sortTypesArray: { value: string; textContent: string }[] = [
		{ value: "priceAscend", textContent: "Цена по возрастанию ⏶" },
		{ value: "priceDescend", textContent: "Цена по убыванию ⏷" },
		{ value: "nameAscend", textContent: "Название по возрастанию ⏶" },
		{ value: "nameDescend", textContent: "Название по убыванию ⏷" },
	]
	/** Функции сортировок */
	function priceAscend(arr: any[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.price > b.price ? 1 : -1
		})
		setItems(copyArr)
	}
	function priceDescend(arr: any[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.price < b.price ? 1 : -1
		})
		setItems(copyArr)
	}
	function nameAscend(arr: any[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.brand + " " + a.title > b.brand + " " + b.title ? 1 : -1
		})
		setItems(copyArr)
	}
	function nameDescend(arr: any[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.brand + " " + a.title < b.brand + " " + b.title ? 1 : -1
		})
		setItems(copyArr)
	}

	/** Функция фильтра в зависимости от типа ухода. Принимает массив данных и строку с типом ухода. */
	function filterArrayByCare(arr: any[], careType: String) {
		let copyArr = [...arr]
		copyArr = copyArr.filter((el) => el.careType.includes(careType))
		setItems(copyArr)
		return copyArr
	}
	/** Обработчик селекта сортировки */
	function handleSortClick(e: React.MouseEvent<HTMLSelectElement>) {
		const target = e.target as HTMLSelectElement
		if (target.value == "priceAscend") {
			priceAscend(items)
		}
		if (target.value == "priceDescend") {
			priceDescend(items)
		}
		if (target.value == "nameAscend") {
			nameAscend(items)
		}
		if (target.value == "nameDescend") {
			nameDescend(items)
		}
		setCurrentPage(1)
	}
	/** Обработчик кнопки ухода */
	function handleCareButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
		setCurrentPage(1)
		const target = e.target as HTMLButtonElement
		const careButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll(".categories__item")
		const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type=radio]")
		if (target && target.textContent) {
			for (let target of careButtons) {
				target.classList.remove("active")
			}
			target.classList.add("active")

			for (let radioButton of radioButtons) {
				const radioLabel = radioButton.nextSibling
				if (radioLabel && radioLabel.textContent == target.textContent) {
					radioButton.checked = true
				}
			}
			return priceAscend(filterArrayByCare(props.data, target.textContent))
		}
	}
	/** Обработчик кнопки ухода из левой панели */
	function handleCareRadioClick(e: React.MouseEvent<HTMLInputElement | HTMLLabelElement>) {
		setCurrentPage(1)
		const target = e.target as HTMLInputElement | HTMLLabelElement
		const careButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll(".categories__item")
		for (let button of careButtons) {
			button.classList.remove("active")
			if (button.textContent == target.nextElementSibling?.textContent) {
				button.classList.add("active")
			}
		}
		return priceAscend(filterArrayByCare(props.data, String(target.nextElementSibling?.textContent)))
	}
	/** Функция очистки фильтра при нажатии на кнопку корзины в фильтре слева. */
	function clearFilter(e: React.MouseEvent<HTMLDivElement>) {
		/** Удалили выделение с радиокнопок */
		const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type=radio]")
		for (let radioButton of radioButtons) {
			radioButton.checked = false
		}
		/** Удалили выделение с кнопок ухода */
		let careButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll(".categories__item")
		for (let careButton of careButtons) {
			careButton.classList.remove("active")
		}
		/** Сортируем в конце во избежания перемешивания элементов. */
		priceAscend(props.data)
	}

	useEffect(() => {
		/** Сортируем список по умолчанию */
		priceAscend(props.data)
	}, [])

	return (
		<section className="_container catalogue-section">
			{/** Хлебные крошки */}
			<p className="catalogue-section__breadcrumbs">
				Главная | <span>Косметика и гигиена</span>
			</p>
			{/** Заголовок и сортировка */}
			<div className="catalogue-section__heading heading">
				<h1 className="heading__title">КОСМЕТИКА И ГИГИЕНА</h1>
				<p className="heading__sort">
					Сортировка:
					<span>
						<select onClick={handleSortClick}>
							{sortTypesArray.map((type, idx) => {
								return (
									<option
										key={idx}
										value={type.value}>
										{type.textContent}
									</option>
								)
							})}
						</select>
					</span>
				</p>
			</div>
			{/** Табы видов ухода */}
			<div className="catalogue-section__categories categories">
				{careTypesArray.map((care, idx) => {
					return (
						<button
							onClick={handleCareButtonClick}
							key={idx}
							className="categories__item">
							{care.name}
						</button>
					)
				})}
			</div>
			{/** Основной раздел каталога */}
			<div className="catalogue-section__catalogue catalogue">
				{/** Боковая панель */}
				<div className="catalogue__aside aside">
					<p className="aside__heading">ПОДБОР ПО ПАРАМЕТРАМ</p>
					{/** Селектор по цене */}
					<p className="aside__price">Цена ₸</p>
					<div className="aside__range">
						<PriceSelector />
					</div>
					<Manufacturers data={props.data} />
					{/** Кнопки действий с фильтрами - показать, удалить */}
					<div className="aside__filter-buttons">
						<ButtonMedium textContent="Показать" />
						<div
							onClick={clearFilter}
							className="">
							<RoundButtonLarge iconSrc={bin} />
						</div>
					</div>
					{/** Боковые кнопки ухода */}
					<div className="aside__care care">
						{careTypesArray.map((care, idx) => {
							return (
								<div
									key={idx}
									className="care__type">
									<input
										onClick={handleCareRadioClick}
										type="radio"
										id={care.id}
										name="care"
										value={care.id}
									/>
									<label htmlFor={care.id}>{care.name}</label>
								</div>
							)
						})}
					</div>
				</div>
				{/** Непосредственно сам каталог */}
				<div className="catalogue__items items">
					<div className="items__list">
						{currentItems.map((el: any, idx: number) => {
							return (
								<Item
									key={idx}
									imageSrc={el.imageSrc}
									size={el.size + " " + el.sizeType.split(", ")[1]}
									brand={el.brand + " "}
									title={el.title}
									barcode={el.barcode}
									manufacturer={el.manufacturer}
									price={el.price}
								/>
							)
						})}
					</div>
					{/** Пагинация */}
					<Paginator
						totalItems={items.length}
						itemsPerPage={itemsPerPage}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</div>
		</section>
	)
}

export default Catalogue
