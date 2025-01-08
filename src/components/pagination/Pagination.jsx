import styles from './Pagination.module.css'

export const Pagination = ({
	totalPages,
	currentPage,
	handleNextPage,
	handlePrevPage,
	handlePageClick
}) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.arrow}
				onClick={handlePrevPage}
				disabled={currentPage === 1}
			>
				{'<'}
			</button>
			{[...Array(totalPages)].map((_, index) => (
				<button
					className={styles.pageNumber}
					key={index}
					onClick={() => handlePageClick(index + 1)}
					disabled={index + 1 === currentPage}
				>
					{index + 1}
				</button>
			))}

			<button
				className={styles.arrow}
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
			>
				{'>'}
			</button>
		</div>
	)
}
