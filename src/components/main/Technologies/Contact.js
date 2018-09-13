import React, { Component } from 'react';
import { Grid, Icon, Input, TextArea, Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import { rotateInUpLeft, rotateInUpRight, fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TrackVisibility from 'react-on-screen';
import css from '../../styles/styles.css';

const styles = {
	rotateInUpLeft: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(rotateInUpLeft, 'rotateInUpLeft')
	},
	rotateInUpRight: {
		animation: 'x 2.5s',
		animationName: Radium.keyframes(rotateInUpRight, 'rotateInUpRight')
	},
	fadeInDown: {
		animation: 'x 2s',
		animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
	}
}

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			serverMessage: "",
			loader: 'none'
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	validate = () => {
		let condition;
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (this.state.name !== "" && this.state.email !== "" && this.state.email.match(emailRegex) && this.state.subject !== "" && this.state.message !== "") {
			return condition = true
		} else {
			return condition = false
		}
	}

	sendMail = async (e) => {
		let condition = this.validate();
		if (condition) {
			this.setState({
				loader: 'block'
			})
			const data = {
				name: this.state.name,
				email: this.state.email,
				subject: this.state.subject,
				message: this.state.message
			}
			await fetch('https://reves-group.com/api/techForm', {
				body: JSON.stringify(data),
				headers: {
					'content-type': 'application/json'
				},
				method: 'POST'
			}).then((response) => response.text())
				.then((responseText) => {
					let res = JSON.parse(responseText)
					if (res.success == true) {
						this.setState({
							serverMessage: 'Email sent successfully!',
							loader: 'none'
						})
					} else {
						this.setState({
							serverMessage: 'An error has occurred!'
						})
					}
				})
		}
	}

	cleanState = (e) => {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: ''
		})
	}


	render() {
		const { name, email, subject, message } = this.state
		return (
			<div style={{ paddingBottom: "20px", overflow: 'hidden', position: 'relative', background: 'white' }}>
				<TrackVisibility once throttleInterval={800}>
					{
						({ isVisible }) => isVisible ?
							<StyleRoot>
								<div style={styles.fadeInDown}>
									<h2 style={{ textAlign: 'center' }}>CONTACT <span style={{ color: '#003571' }}> US</span></h2>
									<p style={{ textAlign: 'center' }}>We'd love to hear your feedback.</p>
									<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
										<span className={css.border}></span>
										<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
										<span className={css.border}></span>
									</div>
								</div>
							</StyleRoot> : ''
					}
				</TrackVisibility>
				<Grid style={{ margin: '0px' }}>
					<Grid.Row>
						<Grid.Column computer={6} tablet={6} mobile={15} className={css.contactColumn} >
							<TrackVisibility once throttleInterval={800}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.rotateInUpLeft}>
												<div className={css.contact}>
													<div className={css.contactDiv}>
														<span style={{ color: '#003571' }}>ADDRESS</span><br />
														<span style={{ color: '#414a4c' }}>Beogradska 114a<br />
															11277 Belgrade (Ugrinovci)<br />
															Serbia</span>
													</div>
													<Icon name='location arrow' size='big' className={css.iconWhite} />
												</div>
												<div className={css.contact}>
													<div className={css.contactDiv} >
														<span style={{ color: '#003571' }}>SAY HELLO </span><br />
														<span style={{ color: '#414a4c' }}>info@revesgroup.com</span>
													</div>
													<Icon name='mail' size='big' className={css.iconWhite} />
												</div>
											</div>
										</StyleRoot> : ''
								}
							</TrackVisibility>
						</Grid.Column>
						<Grid.Column className={css.formDiv} computer={8} tablet={8} mobile={15} >
							<TrackVisibility once throttleInterval={800}>
								{
									({ isVisible }) => isVisible ?
										<StyleRoot>
											<div style={styles.rotateInUpRight}>
												<Form onSubmit={(e) => { this.sendMail(); this.cleanState(); }}>
													<Input name="name" onChange={this.handleChange} className={css.inputs} placeholder='Name' value={name} style={{ marginRight: '20px' }} />
													<Input name="email" type="email" onChange={this.handleChange} className={css.inputs} placeholder='Email' value={email} />
													<div className={css.inputs}>
														<Input name="subject" onChange={this.handleChange} className={css.subjectInput} placeholder='Subject' value={subject} />
													</div>
													<div className={css.inputs}>
														<TextArea name="message" onChange={this.handleChange} rows={10} placeholder='Message...' value={message} />
														<div style={{ textAlign: 'center', fontSize: '15px' }}>{this.state.serverMessage}</div>
														<div style={{ display: `${this.state.loader}` }}>
															<Dimmer active style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '5px' }}>
																<Loader size='big'>Loading</Loader>
															</Dimmer>
														</div>
													</div>
													<div style={{ marginBottom: '50px' }}>
														<Button className={css.sendButton} >Send</Button>
													</div>
												</Form>

											</div>
										</StyleRoot> : ''
								}
							</TrackVisibility>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				{/* <div>
					<p style={{ marginTop: "80px", textAlign: "center", fontSize: '14px', color: '#003571' }}>© Reves Technologies 2018 | All right reserved</p>
				</div> */}
			</div>
		)
	}
}
export default Contact;