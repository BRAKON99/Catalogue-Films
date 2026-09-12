import styles from './LayoutMenu.module.css';
import { useAuth } from '../context/AuthContext';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export function LayoutMenu() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		logout();
		navigate('/');
	};

	return (
		<div className={styles.app}>
			<header className={styles['header-menu']}>
				<img className={styles.logo} src='/logo.svg' alt='logo' />
				<ul className={styles['menu-nav']}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? `${styles['menu-nav__link']} ${styles.active}`
									: styles['menu-nav__link']
							}
						>
							Поиск фильмов
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/favourites"
							className={({ isActive }) =>
								isActive
									? `${styles['menu-nav__link']} ${styles.active}`
									: styles['menu-nav__link']
							}
						>
							Мои фильмы
						</NavLink>
					</li>
					<li>
						{user ? (
							<a
								href="#"
								className={`${styles['menu-nav__link']} ${styles['user-icon']} ${styles['logged-in']}`}
								onClick={handleLogout}
							>
								{user.name} (Выйти)
							</a>
						) : (
							<NavLink
								to="/login"
								className={`${styles['menu-nav__link']} ${styles['user-icon']} ${styles['logged-out']}`}
							>
								Войти
							</NavLink>
						)}
					</li>
				</ul>
			</header>
			<main className={styles.body}>
				<Outlet />
			</main>
		</div>
	);
}