import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Header } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Contact from './Contact';
import Footer from './Footer';
import Managment from './Managment';
import Counter from './Counter';
import About from './About';
import movie from '../../images/Ferris-wheel.mp4';
import css from '../styles/styles.css';
import NavbarHome from './HavbarHome';

configureAnchors({ offset: -60, scrollDuration: 800 })


export default class Home extends Component {
	render() {
		return (
			<div>
				<ScrollableAnchor id={'home'}>
					<NavbarHome />
				</ScrollableAnchor>
				<Grid style={{ marginRight: '0px', marginLeft:'-15px' }}>
					<GridRow centered>
						<GridColumn width={16}>
							<div style={{ position: 'fixed', width: '100%' }}>
								<div className={css.videoDiv + " " + css.imgHome}>
									<div className={css.shadowDiv}><h1 style={{ fontSize: '40px' }}>WELCOME TO <span style={{ fontSize: '60px', fontWeight: '400' }}>REVES GROUP</span></h1></div>
									<video className={css.videoCover} autoPlay loop src={movie}>
									</video>
								</div>
							</div>
						</GridColumn>
					</GridRow>
				</Grid>
				<ScrollableAnchor id={'about'}>
					<About />
				</ScrollableAnchor>
				<Counter />
				<ScrollableAnchor id={'managment'}>
					<Managment />
				</ScrollableAnchor>
				<ScrollableAnchor id={'contact'}>
					<Contact />
				</ScrollableAnchor>
				<Footer />
			</div>
		)
	}
}
