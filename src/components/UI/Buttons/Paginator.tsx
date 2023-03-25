//@ts-nocheck
import "./Paginator.scss"
import arrow from "../../../assets/icons/arrow.svg"

function Paginator({ totalItems, itemsPerPage, currentPage, setCurrentPage }) {
	/** Формируем массив кнопок для каждой страницы и его отрисовываем.
	 * Действия здесь - кнопка слева/справа для последовательного перемещения по каталогу,
	 * и кнопки-цифры.
	 */
	let pages: number[] = []
	let allPages = Math.ceil(totalItems / itemsPerPage)
	for (let pageNumber = 1; pageNumber <= allPages; pageNumber++) {
		pages.push(pageNumber)
	}

	return (
		<div className="items__pagination">
			<div className="pagination">
				<button
					onClick={() => (currentPage != 1 ? setCurrentPage(--currentPage) : "")}
					className="pagination__button button">
					<img
						className="button__left"
						src={arrow}
						alt=""
					/>
				</button>
				<div className="pagination__list list">
					{pages.map((page, idx) => {
						return (
							<button
								key={idx}
								onClick={() => setCurrentPage(page)}
								className={`list__number ${page == currentPage ? "active" : ""}`}>
								{page}
							</button>
						)
					})}
				</div>
				<button
					onClick={() => (currentPage < allPages ? setCurrentPage(++currentPage) : "")}
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
