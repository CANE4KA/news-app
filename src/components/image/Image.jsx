import styles from './image.module.css'

export const Image = ({ image }) => {
	return (
		<div className={styles.wrapper}>
			{image && <img src={image} alt='news' className={styles.image} />}
		</div>
	)
}
