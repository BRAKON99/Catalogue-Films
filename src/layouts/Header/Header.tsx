import styles from './Header.module.css';
import type { HeaderProps } from './Header.props';

function Header({ children }: HeaderProps) {
	return (
		<div className={styles.header}>{children}</div>
	);
}

export default Header;