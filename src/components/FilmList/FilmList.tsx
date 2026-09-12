import styles from './FilmList.module.css';
import { FilmListProps } from './FilmList.props';

function FilmList({ children }: FilmListProps) {

	return (
		<div className={styles['film-list']}>{children}</div>
	);
}

export default FilmList;
