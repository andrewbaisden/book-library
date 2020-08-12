import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Books = () => {
	useEffect(() => {
		getAPI();
	}, []);

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const getAPI = () => {
		const API = 'http://localhost:8080/books';

		fetch(API)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setLoading(true);
				setData(data);
			});
	};

	// Function for refreshing the page when the :bookId is put into the browser searchbar. Without it the Book component wont load unless you do a manual page reload.
	const refresh = () => {
		setTimeout(() => {
			window.location.reload();
		}, 100);
	};

	return (
		<Router>
			<Fragment>
				<h1>Books</h1>
				<div>
					{loading === false ? (
						<div>
							<h1>Loading...</h1>
						</div>
					) : (
						<div>
							{data.map((book) => (
								<ul key={book.id}>
									<li>
										<Link onClick={refresh} to={`/books/${book.id}`}>
											{book.book}
										</Link>
									</li>
								</ul>
							))}
						</div>
					)}
				</div>
			</Fragment>
		</Router>
	);
};

export default Books;
