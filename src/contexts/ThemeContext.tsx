'use client';
import { createContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState('dark');
	useMediaQuery(
		{
			query: '(prefers-color-scheme: dark)',
		},
		undefined,
		isSystemDark => (!isSystemDark ? setTheme('light') : setTheme('dark')),
	);

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
