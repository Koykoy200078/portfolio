import React, { useContext } from 'react'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'

import { ThemeContext } from './contexts/ThemeContext'
import BackToTop from './components/BackToTop'
import ScrollToTop from './utils/ScrollToTop'
import { Main, ProjectPage } from './pages'

function App() {
	const { theme } = useContext(ThemeContext)

	console.log('%cDEVELOPER PORTFOLIO', `color:${theme.primary}; font-size:50px`)
	console.log(
		'%chttps://github.com/Koykoy200078',
		`color:${theme.tertiary}; font-size:20px`
	)
	return (
		<div className='app'>
			<Router>
				<ScrollToTop />
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/experience' exact component={ProjectPage} />

					<Redirect to='/' />
				</Switch>
			</Router>
			<BackToTop />
		</div>
	)
}

export default App
