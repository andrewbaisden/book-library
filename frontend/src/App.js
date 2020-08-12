import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Books from './pages/Books';
import Book from './pages/Book';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/books" component={Books} />
				<Route exact path="/books/:bookId" component={Book} />
			</Switch>
		</Router>
	);
};

export default App;
