import "./Paginator.scss"
import arrow from "../../../assets/icons/arrow.svg"
import { SetStateAction } from "react"

function Paginator({ totalItems, itemsPerPage, currentPage, setCurrentPage }: any) {
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
	let allPages: number = Math.ceil(totalItems / itemsPerPage)
	for (let pagenumber = 1; pagenumber <= allPages; pagenumber++) {
		pages.push(pagenumber)
	}

	return (
		<div className="items__pagination">
			<div className="pagination">
				<button
					onClick={() => {
						if (currentPage != 1) {
							toTopOnClick()
							return setCurrentPage(--currentPage)
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
									if (currentPage != page) {
										toTopOnClick()
										return setCurrentPage(page)
									}
								}}
								className={`list__number ${page == currentPage ? "active" : ""}`}>
								{page}
							</button>
						)
					})}
				</div>
				<button
					onClick={() => {
						if (currentPage < allPages) {
							toTopOnClick()
							return setCurrentPage(++currentPage)
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
