import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({ text, className, onClick }: ButtonProps) {
	return (
		<button className={`${styles['button']} ${className || ''}`} onClick={onClick}>{text}</button>
	);
}

export default Button;
