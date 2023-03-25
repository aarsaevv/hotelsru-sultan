import BaseSearch from "./BaseSearch"

function SearchMedium({ placeholder = "", iconSrc = "" }) {
	return (
		<div className="_search-medium">
			<BaseSearch
				placeholder={placeholder}
				iconSrc={iconSrc}
			/>
		</div>
	)
}

export default SearchMedium
