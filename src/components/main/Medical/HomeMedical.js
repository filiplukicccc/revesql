import React, { Component } from 'react'
import Navbar from './NavbarMedical';
import Video from './VideoAfr';
import About from './AbuotAfr'
import Icons from './Icons'
import Mission from './Mission';
import Counter from './Counter';
import Team from './TeamAfr';
import Contact from './Contact';
import Footer from './Footer';

export default class HomeMedical extends Component {
	componentWillMount() {
		{
		typeof window === 'undefined' ? '' : window.scroll(0, 0)
		}
	}
	render() {
		return (
			<div>
				<Navbar />
				<Video />
				<About />
				<Icons />
				<Mission />
				<Counter />
				<Team />
				<Contact />
				<Footer />
			</div>
		)
	}
}
