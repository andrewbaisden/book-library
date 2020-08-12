import React, { Fragment, useEffect, useState } from 'react';

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
			<h1>Book</h1>
			<div>
				{loading === false ? (
					<div>
						<h1>Loading...</h1>
					</div>
				) : (
					<div>
						<ul>
							<li>{data.id}</li>
							<li>{data.product}</li>
							<li>{data.type}</li>
						</ul>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default Book;
