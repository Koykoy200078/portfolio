import React, { useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import BackToTop from './components/BackToTop';
import ScrollToTop from './utils/ScrollToTop';
import { Main } from './pages';

function App() {
	const { theme } = useContext(ThemeContext);

	console.log('%cDEVELOPER PORTFOLIO', `color:${theme.primary}; font-size:50px`);
	console.log('%chttps://github.com/Koykoy200078', `color:${theme.tertiary}; font-size:20px`);
	return (
		<div className='app'>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</Router>
			<BackToTop />
		</div>
	);
}

export default App;
