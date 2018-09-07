import React, { Component } from 'react'
import Navbar from './Navbar';
import Video from './Video';
import About from './About';
import Services from './Services';
import Clients from './Clients';
import Team from './Team';
import Counter from './Counter';
import Contact from './Contact';
import Footer from './Footer';

export default class HomeTech extends Component {
	componentWillMount() {
		{
		window.scroll(0, 0) === undefined ? window.scroll(0, 0) : window.scroll(0, 0)
		}
	}
	render() {
		return (
			<div>
				<Navbar />
				<Video />
				<About />
				<Services />
				<Clients />
				<Team />
				<Counter />
				<Contact />
				<Footer />
			</div>
		)
	}
}
