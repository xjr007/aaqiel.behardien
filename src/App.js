import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// navigation links
import NavLinks from './assets/msc/navLinks';

// sections
import IntroSection from './components/sections/introSection';

// style sheet
import './assets/styles/style.css';
import NavBar from './components/layout/navBar';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<div className='App'>
						<NavBar />
						<IntroSection />
					</div>
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
