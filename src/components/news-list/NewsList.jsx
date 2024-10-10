import styles from './news-list.module.css'

import { NewsItem } from '../news-item/NewsItem'

export const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map(item => (
				<NewsItem key={item.id} item={item} />
			))}
		</ul>
	)
}
