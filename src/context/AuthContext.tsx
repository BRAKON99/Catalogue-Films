import { createContext, useContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';

// Опиши полный тип контекста
type AuthContextType = {
	user: { name: string } | null;
	login: (userData: { name: string }) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within AuthProvider');
	}
	return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<{ name: string } | null>(null);

	useEffect(() => {
		const savedUser = localStorage.getItem('user');
		if (savedUser) {
			setUser(JSON.parse(savedUser));
		}
	}, []);

	const login = (userData: { name: string }) => {
		localStorage.setItem('user', JSON.stringify(userData));
		setUser(userData);
	};

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};