import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Weather Forecast',
	description: 'Forecast city weather',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</ThemeProvider>
	);
}
