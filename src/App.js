import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// sections
import IntroSection from './components/sections/introSection';

// style sheet
import './assets/styles/style.css';

const App = () => {
	return (
		<div className='App'>
			<IntroSection />
		</div>
	);
};

export default App;
