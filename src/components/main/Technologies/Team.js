import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import { flipInX, slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TrackVisibility from 'react-on-screen';
import sane from '../../../images/Sanee.png';
import elvis from "../../../images/Elvis.png";
import ciga from "../../../images/Ciga.png";
import ficko from "../../../images/Ficko.png";
import gagi from "../../../images/Gagi.png";
import kova from "../../../images/Kova.png";
import marko from "../../../images/Marko.png";
import tiki from "../../../images/Tiki.png";
import steva from "../../../images/steva-stefan.png";
import css from '../../styles/styles.css';
import scss from '../../styles/styles.scss';



const styles = {
	flipInX: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(flipInX, 'flipInX')
	},
	slideInRight: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(slideInRight, 'slideInRight')
	}
}

class TeamTechnologies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trans: 0,
			col: '#f0d389'
		}
	}
	plus = () => {
		this.setState({
			trans: this.state.trans - 305
		})
		if (this.state.trans === -1525) {
			this.setState({
				trans: -1525
			})
		}
	}
	plus1 = () => {
		this.setState({
			trans: this.state.trans - 305
		})
		if (this.state.trans === -1830) {
			this.setState({
				trans: -1830
			})
		}
	}
	plus2 = () => {
		this.setState({
			trans: this.state.trans - 305
		})
		if (this.state.trans === -2135) {
			this.setState({
				trans: -2135
			})
		}
	}
	plus3 = () => {
		this.setState({
			trans: this.state.trans - 305
		})
		if (this.state.trans === -2440) {
			this.setState({
				trans: -2440
			})
		}
	}
	minus = () => {
		this.setState({
			trans: this.state.trans + 305
		})
		if (this.state.trans === 0) {
			this.setState({
				trans: 0
			})
		}
	}
	render() {
		return (
			<div style={{ background: 'white', position: 'relative', padding: '1px', height: '930px' }}>
				<TrackVisibility once throttleInterval={800}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.flipInX}>
									<h2 style={{ textAlign: 'center' }} className={css.meet}>MEET <span style={{ color: '#003571' }}> THE TEAM</span></h2>
									<p style={{ textAlign: 'center' }}>We're the best professionals in this field</p>
									<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
										<span className={css.border}></span>
										<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
										<span className={css.border}></span>
									</div>
								</div>
							</StyleRoot> : ''
					}
				</TrackVisibility>
				<TrackVisibility once throttleInterval={800}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.slideInRight} className={scss.container}>
									<div className={scss.inCon}>
										<div className={scss.wrap}>
											<div style={{ transform: `translateX(${this.state.trans + 'px'})` }} className={scss.inWrap}>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${sane})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${sane})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>DUSAN MARKOVIC</h3>
													<p className={scss.profession}>Project Manager</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${ficko})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${ficko})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>FILIP LUKIC</h3>
													<p className={scss.profession}>Frontend Developer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${tiki})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${tiki})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>TIJANA ERCEG</h3>
													<p className={scss.profession}>Web Designer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${ciga})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${ciga})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>MILOS CIGANOVIC</h3>
													<p className={scss.profession}>Software Developer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${steva})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${steva})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>STEFAN PAREZANOVIC</h3>
													<p className={scss.profession}>Backend Developer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${elvis})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${elvis})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>ELVIS MASOVIC</h3>
													<p className={scss.profession}>Software Developer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${gagi})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${gagi})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>DRAGAN NIKOLIC</h3>
													<p className={scss.profession}>Frontend Developer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${marko})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${marko})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>MARKO VENIGER</h3>
													<p className={scss.profession}>Gameplay Progammer</p>
												</div>
												<div className={scss.pic}>
													<div className={scss.inPic}>
														<div style={{ backgroundImage: `url(${kova})` }} className={scss.mem}>
															<div className={scss.hoverDiv}></div>
														</div>
														<div className={scss.teamImgHover} style={{ backgroundImage: `url(${kova})` }}>
															<div className={scss.hoverDivSec}></div></div>
													</div>
													<h3 className={scss.name}>NEMANJA KOVACEVIC</h3>
													<p className={scss.profession}>PHP Developer</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</StyleRoot> : ''
					}
				</TrackVisibility>
				<div className={scss.buttons}>
					<span onClick={this.minus}><Icon className={scss.iconGrey + " " +  scss.icon1} size='big' name='angle left' /></span>
					<span onClick={this.plus}><Icon className={scss.iconGrey + " " + scss.icon1} size='big' name='angle right' /></span>

				</div>
				<div className={scss.buttons1}>
					<span onClick={this.minus}><Icon className={scss.iconGrey + " " +  scss.icon1} size='big' name='angle left' /></span>
					<span onClick={this.plus1}><Icon className={scss.iconGrey + " " + scss.icon1} size='big' name='angle right' /></span>
				</div>
				<div className={scss.buttons2}>
					<span onClick={this.minus}><Icon className={scss.iconGrey + " " + scss.icon1} size='big' name='angle left' /></span>
					<span onClick={this.plus2}><Icon className={scss.iconGrey + " " + scss.icon1} size='big' name='angle right' /></span>
				</div>
				<div className={scss.buttons3}>
					<span onClick={this.minus}><Icon className={scss.iconGrey + " " + scss.icon1} size='big' name='angle left' /></span>
					<span onClick={this.plus3}><Icon className={scss.iconGrey + " " + scss.icon1} size='big' name='angle right' /></span>
				</div>

			</div>
		)
	}
}
export default TeamTechnologies;

