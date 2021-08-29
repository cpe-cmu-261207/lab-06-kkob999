import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import About from './About'
import Current from './Current'
import HisResult from './HisResult'
import HisSelect from './HisSelect'


const Navbar = () => {
	return (
		<Router>
			<div className='my-5'>
				<p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
				<div className='flex justify-center text-md space-x-5'>
					<p>
						<Link to='/current'>Current price</Link>
					</p>
					<p>|</p>
					<p>
						<Link to='/history/select'>Historical price</Link>
					</p>
					<p>|</p>
					<p>
						<Link to='/about'>About me</Link>
					</p>

				</div>
				<br />

				<Switch>
					<Route path='/' exact>
						<Current />
					</Route>
					<Route path='/current'>
						<Current />
					</Route>
					<Route path='/history/select'>
						<HisSelect />
					</Route>
					<Route path='/history/result'>
						<HisResult />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
				</Switch>

			</div>
		</Router>

	)
}

export default Navbar