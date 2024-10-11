import { useEffect, useState } from 'react'

import { NewsBanner } from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'
import { Pagination } from '../../components/pagination/Pagination'
import { Skeleton } from '../../components/skeleton/Skeleton'

import styles from './main.module.css'

import { getNews } from '../../api/apiNews'

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 10
	const pageSize = 10

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true)
			const response = await getNews(currentPage, pageSize)
			setNews(response.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePageClick = pageNumber => {
		setCurrentPage(pageNumber)
	}

	return (
		<main className={styles.main}>
			{isLoading ? (
				<Skeleton type='banner' count={1} />
			) : (
				<NewsBanner item={news[0]} />
			)}

			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>

			{isLoading ? (
				<Skeleton type='item' count={news.length} />
			) : (
				<NewsList news={news} />
			)}

			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>
		</main>
	)
}
