import { useEffect, useState } from 'react'

import { Categories } from '../../components/categories/Categories'
import { NewsBanner } from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'
import { Pagination } from '../../components/pagination/Pagination'
import { Skeleton } from '../../components/skeleton/Skeleton'

import styles from './main.module.css'

import { getCategories, getNews } from '../../api/apiNews'

export const Main = () => {
	const [news, setNews] = useState([])
	const [categories, setCategories] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 10
	const pageSize = 10

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory
			})
			setNews(response.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchCategories = async () => {
		try {
			const response = await getCategories()
			setCategories(['All', ...response.categories])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage, selectedCategory])

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
			<Categories
				categories={categories}
				setSelectedCategory={setSelectedCategory}
				selectedCategory={selectedCategory}
			/>

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
