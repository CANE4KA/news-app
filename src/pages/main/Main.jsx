import { useEffect, useState } from 'react'

import { NewsBanner } from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'
import { Skeleton } from '../../components/skeleton/Skeleton'

import styles from './main.module.css'

import { getNews } from '../../api/apiNews'

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true)
				const response = await getNews()
				setNews(response.news)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
			}
		}

		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length === 0 && isLoading ? (
				<Skeleton type='banner' count={1} />
			) : (
				<NewsBanner item={news[0]} />
			)}

			{isLoading ? (
				<Skeleton type='item' count={news.length} />
			) : (
				<NewsList news={news} />
			)}
		</main>
	)
}
