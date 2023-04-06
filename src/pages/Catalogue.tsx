import { useEffect, useState } from "react"
import { CartProps, CatalogueProps } from "../types/types"
import "../scss/pages/Catalogue.scss"
import bin from "../assets/icons/bin.svg"
import ButtonMedium from "../components/UI/Buttons/ButtonMedium"
import Item from "../components/Item"
import Paginator from "../components/UI/Buttons/Paginator"
import PriceSelector from "../components/UI/Forms/PriceSelector"
import RoundButtonLarge from "../components/UI/Buttons/RoundButtonLarge"
import Manufacturers from "../components/Manufacturers"

function Catalogue(props: { data: CatalogueProps[]; setData: any; cartItems: CartProps[]; setCartItems: any }) {
	// ИНИЦИАЛИЗАЦИЯ
	/** Стейт из пришедших данных для удобства сортировки и фильтров */
	const [catalogueData, setCatalogueData] = useState(props.data)

	// СОРТИРОВКА
	/** Массив типов сортировки */
	let sortTypesArray: { value: string; textContent: string }[] = [
		{ value: "priceAscend", textContent: "Цена по возрастанию ⏶" },
		{ value: "priceDescend", textContent: "Цена по убыванию ⏷" },
		{ value: "nameAscend", textContent: "Название по возрастанию ⏶" },
		{ value: "nameDescend", textContent: "Название по убыванию ⏷" },
	]
	/** Различные функции сортировки. Надо переписать на более умную функцию. */
	function priceAscend(arr: CatalogueProps[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.price > b.price ? 1 : -1
		})
		setCatalogueData(copyArr)
	}
	function priceDescend(arr: CatalogueProps[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.price < b.price ? 1 : -1
		})
		setCatalogueData(copyArr)
	}
	function nameAscend(arr: CatalogueProps[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.brand + " " + a.title > b.brand + " " + b.title ? 1 : -1
		})
		setCatalogueData(copyArr)
	}
	function nameDescend(arr: CatalogueProps[]) {
		let copyArr = [...arr]
		copyArr.sort((a, b) => {
			return a.brand + " " + a.title < b.brand + " " + b.title ? 1 : -1
		})
		setCatalogueData(copyArr)
	}
	/** Обработчик селекта сортировки */
	function handleSortClick(e: React.MouseEvent<HTMLSelectElement>) {
		const target = e.target as HTMLSelectElement
		if (target.value == "priceAscend") {
			priceAscend(catalogueData)
		}
		if (target.value == "priceDescend") {
			priceDescend(catalogueData)
		}
		if (target.value == "nameAscend") {
			nameAscend(catalogueData)
		}
		if (target.value == "nameDescend") {
			nameDescend(catalogueData)
		}
		setCurrentPage(1)
	}

	// ТИПЫ УХОДА СВЕРХУ
	let careTypesArray: { name: string; id: string }[] = [
		{ name: "Уход за телом", id: "care__body" },
		{ name: "Уход за руками", id: "care__hands" },
		{ name: "Уход за ногами", id: "care__legs" },
		{ name: "Уход за лицом", id: "care__face" },
	]
	/** Функция фильтра в зависимости от типа ухода. Принимает массив данных и строку с типом ухода. */
	function filterArrayByCare(arr: CatalogueProps[], careType: string) {
		let copyArr = [...arr]
		copyArr = copyArr.filter((el) => el.careType.includes(careType))
		setCatalogueData(copyArr)
		return copyArr
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

	// БОКОВАЯ ПАНЕЛЬ ФИЛЬТРОВ
	/** Функция фильтра в зависимости от выбранной цены. Принимает массив данных и верхнюю-нижнюю границу цен. */
	function filterArrayByPrice(arr: CatalogueProps[], numA: number | null, numB: number | null) {
		let copyArr = [...arr]
		if (numA && numB) {
			copyArr = copyArr.filter((el) => el.price >= numA && el.price <= numB)
		}
		if (numA) {
			copyArr = copyArr.filter((el) => el.price >= numA)
		}
		if (numB) {
			copyArr = copyArr.filter((el) => el.price <= numB)
		}
		setCatalogueData(copyArr)
		return copyArr
	}
	/** Функция фильтра в зависимости от выбранных производителей. Принимает массив данных и массив строк - производителей */
	function filterArrayByManufacturers(arr: CatalogueProps[], arrayOfManufacturers: string[]) {
		let copyArr = [...arr]
		copyArr = copyArr.filter((el) => {
			for (let item of arrayOfManufacturers) {
				if (el.manufacturer == item) {
					return el
				}
			}
			return false
		})
		setCatalogueData(copyArr)
		return copyArr
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
	/** Функция обработки кнопки "Показать" */
	function handleFilter(e: React.MouseEvent<HTMLDivElement>) {
		setCurrentPage(1)
		const target = e.target as Element
		if (target && target.closest("._button-medium")) {
			let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".list__checkbox")
			let arrayOfChecked: Array<string> = []
			for (let checkbox of checkboxes) {
				if (checkbox.checked == true) {
					arrayOfChecked.push(checkbox.id)
				}
			}
			if (arrayOfChecked.length) {
				return priceAscend(filterArrayByManufacturers(props.data, arrayOfChecked))
			}
			let numericInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("#price-low, #price-high")
			let inputA = numericInputs[0].valueAsNumber
			let inputB = numericInputs[1].valueAsNumber
			if (inputA || inputB) {
				return priceAscend(filterArrayByPrice(props.data, inputA, inputB))
			}
		}
	}
	/** Функция очистки фильтра при нажатии на кнопку корзины в фильтре слева. */
	function clearFilter(e: React.MouseEvent<HTMLDivElement>) {
		setCurrentPage(1)
		/** Удалили выделение с радиокнопок */
		const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type=radio]")
		for (let radioButton of radioButtons) {
			radioButton.checked = false
		}
		/** Удалили выделение с кнопок ухода */
		const careButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll(".categories__item")
		for (let careButton of careButtons) {
			careButton.classList.remove("active")
		}
		/** Удалили выделение чекбоксов */
		const checkboxes: NodeListOf<any> = document.querySelectorAll(".manufacturers__list > div")
		for (let checkbox of checkboxes) {
			checkbox.firstChild.checked = false
		}
		/** Удалили значения из селектора цен */
		const numericInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("#price-low, #price-high")
		for (let input of numericInputs) {
			input.value = ""
		}
		/** Сортируем в конце во избежания перемешивания элементов. */
		priceAscend(props.data)
	}
	// ПАГИНАЦИЯ
	/** Стейт текущей страницы каталога */
	const [currentPage, setCurrentPage] = useState(1)
	/** Сколько товаров должно быть на каждой странице */
	const [itemsPerPage, setItemsPerPage] = useState(6)
	/** Индекс последней вещи в разбитом массиве */
	const lastItemIndex = currentPage * itemsPerPage
	/** Индекс первой вещи в разбитом массиве */
	const firstItemIndex = lastItemIndex - itemsPerPage
	/** Разбитый массив */
	const currentItems = catalogueData.slice(firstItemIndex, lastItemIndex)

	useEffect(() => {
		/** Сортируем список по умолчанию */
		priceAscend(catalogueData)
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
							{sortTypesArray.map((type: any, idx: number) => {
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
				{careTypesArray.map((care: any, idx: number) => {
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
					<p className="aside__price">Цена, ₸</p>
					<div className="aside__range">
						<PriceSelector />
					</div>
					{/** Селектор по производителю */}
					<Manufacturers data={props.data} />
					<div className="aside__filter-buttons">
						{/** Кнопка ПОКАЗАТЬ */}
						<div onClick={handleFilter}>
							<ButtonMedium textContent="Показать" />
						</div>
						{/** Кнопка очистки фильтра */}
						<div
							onClick={clearFilter}
							className="">
							<RoundButtonLarge iconSrc={bin} />
						</div>
					</div>
					{/** Боковые кнопки ухода */}
					<div className="aside__care care">
						{careTypesArray.map((care: any, idx: number) => {
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
					{/** Селекты сортировки */}
					<p className="aside__sort sort">
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
				{/** Непосредственно сам каталог */}
				{currentItems.length ? (
					<div className="catalogue__items items">
						{/** Список товаров */}
						<div className="items__list">
							{currentItems.map((el: CatalogueProps, idx: number) => {
								return (
									<Item
										key={idx}
										el={el}
										cartItems={props.cartItems}
										setCartItems={props.setCartItems}
									/>
								)
							})}
						</div>
						{/** Пагинация */}
						<Paginator
							totalItems={catalogueData.length}
							itemsPerPage={itemsPerPage}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				) : (
					<span className="empty">Товара нет или он не соответствует выбранным фильтрам.</span>
				)}
			</div>
		</section>
	)
}

export default Catalogue
