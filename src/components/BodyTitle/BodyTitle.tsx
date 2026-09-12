import styles from './BodyTitle.module.css';

function BodyTitle() {
	return (
		<div className={styles['body']}>
			<h1 className={styles['body-title']}>Поиск</h1>
			<p className={styles['body-text']}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</p>
		</div>
	);
}

export default BodyTitle;
