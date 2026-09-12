import { FormEvent, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AllInput from '../../components/AllInput/AllInput';
import Button from '../../components/Button/Button';
import styles from './Login.module.css'

export function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!name.trim()) return;
		login({ name });
		navigate('/');
	};

	return (
		<div className={styles['login-wrapper']}>
			<h2 className={styles['auth-title']}>Вход</h2>
			<form className={styles['login']} onSubmit={handleSubmit}>
				< AllInput
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)
					}
					text='Введите имя'
				/>
				<Button text='Войти' type="submit"></Button>
			</form >
		</div>
	);
}