import styles from './news-banner.module.css'

import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { Image } from '../image/Image'

export const NewsBanner = ({ item }) => {
	return (
		<div className={styles.banner}>
			<Image image={item?.image} />
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</div>
	)
}
