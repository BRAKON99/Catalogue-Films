import styles from './InputForm.module.css';
import Button from '../Button/Button';
import AllInput from '../AllInput/AllInput';
import { useState } from 'react';

function InputForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputData(e.target.value);
	};

	const searchForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form className={styles['form']} action="" onSubmit={searchForm}>
			<AllInput className={styles['input']} text='Введите название' type='text' name='search' onChange={inputChange} value={inputData} />
			<Button text='Искать' className={styles['button']}></Button>
		</form >
	);
}

export default InputForm;