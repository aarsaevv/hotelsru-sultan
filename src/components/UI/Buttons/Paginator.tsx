import "../../../scss/components/Paginator.scss"
import arrow from "../../../assets/icons/arrow.svg"

function Paginator(props: { totalItems: number; itemsPerPage: number; currentPage: number; setCurrentPage: any }) {
	function toTopOnClick() {
		window.scrollTo({
			top: 260,
			behavior: "smooth",
		})
	}
	/** Формируем массив кнопок для каждой страницы и его отрисовываем.
	 * Действия здесь - кнопка слева/справа для последовательного перемещения по каталогу,
	 * и кнопки-цифры.
	 */
	let pages: number[] = []
	let allPages: number = Math.ceil(props.totalItems / props.itemsPerPage)
	for (let pagenumber = 1; pagenumber <= allPages; pagenumber++) {
		pages.push(pagenumber)
	}

	return (
		<div className="items__pagination">
			<div className="pagination">
				<button
					onClick={() => {
						if (props.currentPage != 1) {
							toTopOnClick()
							return props.setCurrentPage(--props.currentPage)
						}
					}}
					className="pagination__button button">
					<img
						className="button__left"
						src={arrow}
						alt=""
					/>
				</button>
				<div className="pagination__list list">
					{pages.map((page: number, idx: number) => {
						return (
							<button
								key={idx}
								onClick={() => {
									if (props.currentPage != page) {
										toTopOnClick()
										return props.setCurrentPage(page)
									}
								}}
								className={`list__number ${page == props.currentPage ? "active" : ""}`}>
								{page}
							</button>
						)
					})}
				</div>
				<button
					onClick={() => {
						if (props.currentPage < allPages) {
							toTopOnClick()
							return props.setCurrentPage(++props.currentPage)
						}
					}}
					className="pagination__button">
					<img
						className="button__right"
						src={arrow}
						alt=""
					/>
				</button>
			</div>
		</div>
	)
}

export default Paginator
