import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from '../components/Nav';

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
				<main>
					<Nav />
					<div className="library-heading">
						<h1>Library</h1>
						<h2>Titles</h2>
					</div>
					<div className="library-container">
						{loading === false ? (
							<div>
								<h1>Loading...</h1>
							</div>
						) : (
							<div className="library-book-container">
								{data.map((book) => (
									<div key={book.id} className="library-book">
										<div className="library-book-img">
											<Link onClick={refresh} to={`/books/${book.id}`}>
												<img src={book.img} alt={book.name} />
											</Link>
										</div>
										<div className="library-book-content">
											<Link onClick={refresh} to={`/books/${book.id}`}>
												<h1>{book.name}</h1>
											</Link>
											<p>Author: {book.author}</p>
											<p>Narrated by: {book.narrated}</p>
										</div>
										<div className="library-book-listen">
											<p>{book.bookLength}</p>
											<button className="btn-listen">Listen now</button>
											<button className="btn-download">Download</button>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</main>
			</Fragment>
		</Router>
	);
};

export default Books;
