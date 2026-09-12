import { Link } from 'react-router-dom';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCard.props';


function FilmCard({ id, title, img, rating }: FilmCardProps) {
	return (
		<Link className={styles['card']} to={`/movie/${id}`}>
			<div className={styles['card-image-container']}>
				<img className={styles['card-img']} src={img} alt={title} />
				<div className={styles['card-rating']}> ⭐ {rating} </div>
			</div>
			<h2 className={styles['card-title']}>{title}</h2>
			<button className={styles['card-favourite']}>
				<img src="/public/like.svg" alt="" />
				<p className={styles['card-favourite__text']}>В избранное</p>
			</button>
		</Link>
	);
}

export default FilmCard;
