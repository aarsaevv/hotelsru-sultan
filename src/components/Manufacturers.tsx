import "./Manufacturers.scss"
import search from "../assets/icons/search.svg"
import ManufacturersList from "./ManufacturersList"
import SearchMedium from "./UI/Forms/SearchMedium"

function Manufacturers(props: any) {
	return (
		<div className="aside__manufacturer manufacturer">
			<p className="manufacturer__heading">Производитель</p>
			<SearchMedium
				placeholder="Поиск..."
				iconSrc={search}
			/>
			<ManufacturersList data={props.data} />
		</div>
	)
}

export default Manufacturers
