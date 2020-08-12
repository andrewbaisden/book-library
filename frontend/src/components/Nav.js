import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	// Function for refreshing the page when the :bookId is put into the browser searchbar. Without it the Book component wont load unless you do a manual page reload.
	const refresh = () => {
		setTimeout(() => {
			window.location.reload();
		}, 100);
	};
	return (
		<Fragment>
			<nav>
				<Link onClick={refresh} to="/" href="/" className="logo">
					SoundBite
				</Link>
				<Link onClick={refresh} to="/books" href="/books">
					Library
				</Link>
			</nav>
		</Fragment>
	);
};

export default Nav;
