import { useEffect, useState } from 'react'

import { NewsBanner } from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'

import styles from './main.module.css'

import { getNews } from '../../api/apiNews'

export const Main = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}

		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 && <NewsBanner item={news[0]} />}
			<NewsList news={news} />
		</main>
	)
}
