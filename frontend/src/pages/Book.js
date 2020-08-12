import React, { Fragment, useEffect, useState } from 'react';
import Nav from '../components/Nav';

const Book = ({ match }) => {
	useEffect(() => {
		const getAPI = () => {
			const API = 'http://localhost:8080/books';

			fetch(API)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setLoading(true);
					const book = data.find((p) => p.id === match.params.bookId);
					setData(book);
					console.log(book);
				});
		};
		getAPI();
	}, [match.params.bookId]);

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	return (
		<Fragment>
			<main>
				<Nav />
				<h1>My Book</h1>
				<div>
					{loading === false ? (
						<div>
							<h1>Loading...</h1>
						</div>
					) : (
						<div>
							<div key={data.id} className="library-book">
								<div className="library-book-img">
									<img src={data.img} alt={data.name} />
								</div>
								<div className="library-book-content">
									<h1>{data.name}</h1>
									<p>Author: {data.author}</p>
									<p>Narrated by: {data.narrated}</p>
									<p>Length: {data.bookLength}</p>
									<p>Release Date: {data.releaseDate}</p>
									<p>Language: {data.language}</p>
								</div>
								<div className="library-book-listen">
									<p>{data.bookLength}</p>
									<button className="btn-listen">Listen now</button>
									<button className="btn-download">Download</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</main>
		</Fragment>
	);
};

export default Book;
