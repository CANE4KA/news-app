import styles from './news-item.module.css'

import { formatTimeAgo } from '../../helpers/formatTimeAgo'

export const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div
				style={{ backgroundImage: `url(${item.image})` }}
				className={styles.wrapper}
			></div>
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}
