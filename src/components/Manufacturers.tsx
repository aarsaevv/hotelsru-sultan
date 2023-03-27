import "./Manufacturers.scss"
import { AppProps } from "../helpers/types"
import search from "../assets/icons/search.svg"
import ManufacturersList from "./ManufacturersList"
import SearchMedium from "./UI/Forms/SearchMedium"
import { useState, useEffect } from "react"

function Manufacturers(props: { data: AppProps[] }) {
	const [manufacturers, setManufacturers] = useState([])

	let clearButton = document.querySelector(".aside ._button-round-big") as HTMLButtonElement
	clearButton?.addEventListener("click", (e) => {
		const target = e.target as Element
		if (target) {
			let search = document.querySelector(".aside .search__input") as HTMLInputElement
			if (search) {
				search.value = ""
			}
			setManufacturers(collectManufacturers())
		}
	})

	function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
		const target = e.target as HTMLInputElement
		if (target.value.length >= 1 && target.closest("._search-medium")) {
			let checkboxes: any = Array.from(document.querySelectorAll(".manufacturers__list > div")).map(
				(el) => el.lastChild?.textContent,
			)
			checkboxes = checkboxes.filter((el: String) => el?.toLowerCase().includes(target.value.toLowerCase()))
			setManufacturers(checkboxes)
		} else {
			setManufacturers(collectManufacturers())
		}
	}

	function collectManufacturers() {
		const set = new Set()
		for (let item of props.data) {
			set.add(item.manufacturer)
		}
		const arr: any = Array.from(set.values())
		console.log(arr)
		setManufacturers(arr.sort())
		return arr
	}

	useEffect(() => {
		collectManufacturers()
	}, [])

	return (
		<div
			onKeyUpCapture={handleSearch}
			className="aside__manufacturer manufacturer">
			<p className="manufacturer__heading">Производитель</p>
			<SearchMedium
				placeholder="Поиск..."
				iconSrc={search}
			/>
			<ManufacturersList data={manufacturers} />
		</div>
	)
}

export default Manufacturers
