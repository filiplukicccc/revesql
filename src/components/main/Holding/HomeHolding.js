import React, { Component } from 'react'
import NavbarHolding from './NavbarHolding'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import finance from '../../../images/finance.png';
import commerce from '../../../images/commerce.png';
import cogwheel from '../../../images/cogwheel.png';
import house from '../../../images/house.png';
import movie from '../../../images/City-Nights.mp4';
import css from '../../styles/styles.css';
import style from './styleHol.css';
import AboutHolding from './AboutHolding';
import Counter from './Counter';
import Managment from './Managment';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';


export default class HomeHolding extends Component {
	componentWillMount() {
		{
			typeof window === 'undefined' ? '' : window.scroll(0, 0)
		}
	}
	render() {
		return (
			<div>
				<NavbarHolding />
				<Grid style={{ margin: '0px', marginLeft: '-15px' }}>
					<GridRow centered>
						<GridColumn width={16}>
							<div style={{ position: 'fixed', width: '100%' }}>
								<div className={css.videoDiv + " " + css.imgHol}>
									<div className={css.shadowDiv}><h1>OUR SECRET OF SUCCESS IS <br /><span>ENTHUSIASM</span></h1></div>
									<video className={css.videoCover} autoPlay loop src={movie}>
									</video>
									<div></div>
								</div>
							</div>
						</GridColumn>
					</GridRow>
				</Grid>
				<Grid centered style={{ margin: '0px', marginTop: '700px', position: 'relative', background: 'white' }}>
					<h2>IT’S THE FUEL THAT KEEPS OUR BUSINESSES AFLOAT.</h2>
					<GridRow centered className='homeText'>
						<GridColumn computer={5} tablet={7} mobile={14}>
							<p>
								REVES Holding is a leading investment holding company investing and operating in Central and Eastern Europe. Our mission is to bring convenience to our clients through innovation, efficient service delivery, competence and flexibility.
							</p>
						</GridColumn>
						<GridColumn computer={5} tablet={7} mobile={14}>
							<p>
								We offer customer convenience and customer satisfaction by providing innovative top-quality products and effectively processing high speed and high volume transactions, whilst adhering to principles of integrity, transparency and fairness.
							</p>
						</GridColumn>
					</GridRow>
					<GridRow centered>
						<GridColumn textAlign='center' className={style.flatDiv} computer={3} tablet={7} mobile={12}>
							<div className={style.flatBack}>
								<img src={finance} />
								<h3>FINANCE</h3>
							</div>
						</GridColumn>
						<GridColumn className={style.flatDiv} textAlign='center' computer={3} tablet={7} mobile={12}>
							<div className={style.flatBack}>
								<img src={commerce} />
								<h3>COMMERCE</h3>
							</div>
						</GridColumn>
						<GridColumn className={style.flatDiv} textAlign='center' computer={3} tablet={7} mobile={12}>
							<div className={style.flatBack}>
								<img src={cogwheel} />
								<h3>SOFTWARE DEVELOPMENT</h3>
							</div>
						</GridColumn>
						<GridColumn className={style.flatDiv} textAlign='center' computer={3} tablet={7} mobile={12}>
							<div className={style.flatBack}>
								<img src={house} />
								<h3>REAL ESTATE</h3>
							</div>
						</GridColumn>
					</GridRow>
					<AboutHolding />
					<Counter />
					<Managment />
					<Portfolio />
					<Contact />
				</Grid>
				<Footer />
			</div>
		)
	}
}
