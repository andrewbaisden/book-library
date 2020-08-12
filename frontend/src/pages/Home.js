import React, { Fragment } from 'react';
import Nav from '../components/Nav';

const Home = () => {
	return (
		<Fragment>
			<main>
				<Nav />
			</main>
			<div className="hero">
				<h1>SoundBite Original</h1>
				<h2>The</h2>
				<p>Timeman</p>
				<button>Shop now</button>
			</div>
			<div className="banners">
				<section>
					<div>
						<h1>2 for 1</h1>
					</div>
					<div>
						<p>Choose from over 500 listens in top categories</p>
						<button>Shop Now</button>
					</div>
				</section>
				<section>
					<div>
						<h1>Black Sunday</h1>
					</div>
					<div>
						<p>A journey to a new world leads to a revelation</p>
						<button>Shop Now</button>
					</div>
				</section>
				<section>
					<div>
						<h1>Comedy House</h1>
					</div>
					<div>
						<p>Let the fun come to you in these specials</p>
						<button>Shop Now</button>
					</div>
				</section>
				<section>
					<div>
						<h1>The Power</h1>
					</div>
					<div>
						<p>SoundBites best of the best by month</p>
						<button>Shop Now</button>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default Home;
