import styles from './AllInput.module.css';
import { forwardRef } from 'react';
import { InputProps } from './AllInput.props';

const AllInput = forwardRef<HTMLInputElement, InputProps>(({ text, type, name, className, value, onChange }, ref) => {
	return (
		<input
			ref={ref}
			type={type}
			name={name}
			className={`${styles['input']} ${className || ''}`}
			placeholder={text}
			value={value}
			onChange={onChange}
		/>
	);
});

export default AllInput;