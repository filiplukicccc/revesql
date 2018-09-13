import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from 'semantic-ui-react';
import logoHol from '../../../images/REVES_HOLDING.png';
import HamburgerMenu from 'react-hamburger-menu';
import css from '../../styles/styles.css';


class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'home',
			visible: false,
			class: ''
		}
	}


	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	handleClick() {
		this.setState({
			open: !this.state.open
		});
		this.toggleVisibility();
	}
	componentWillMount() {
		this.border();
	}
	border = () => {
		this.setState({
			class: 'link'
		})
	}

	render() {
		// let log = window.location.href === 'http://localhost:3000/reves_technologies' ? logoTech : window.location.href === 'http://localhost:3000/reves_holding' ? logoHol : logo;
		const { activeItem } = this.state;
		const { visible } = this.state;

		return (
			<div>
				<div className={css.navbarDiv}>
					<div className={css.navbarLogoDiv} style={{ paddingTop: '20px' }}><img src={logoHol} />
						<div className={css.burger}>
							<HamburgerMenu
								isOpen={this.state.open}
								menuClicked={this.handleClick.bind(this)}
								width={24}
								height={21}
								strokeWidth={2}
								rotate={0}
								color='#003571'
								borderRadius={0}
								animationDuration={0.5}
							/>
						</div>
					</div>
					<div className={css.menuStandard} style={{ marginLeft: 'auto', paddingRight: '50px' }}>
						<Menu className={css.menuItem} stackable pointing secondary size='large' style={{ borderBottom: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<Link to='/#home'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item></Link>
							<Link to='/#about'><Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item></Link>
							<Link to='/#managment'><Menu.Item name='Managment' active={activeItem === 'Managment'} onClick={this.handleItemClick}>Managment</Menu.Item></Link>
							<Link to='/reves_holding'><Menu.Item style={{ borderBottom: '2px solid #003571' }} name='Reves_holding' active={activeItem === 'Reves_holding'} onClick={this.border}>REVES Holding</Menu.Item></Link>
							<Link to='/reves_technologies'><Menu.Item name='Reves_technologies' active={activeItem === 'Reves_technologies'} onClick={this.handleItemClick}>REVES Technologies</Menu.Item></Link>
							<Link to='/reves_medical'><Menu.Item name='Reves_holdings_africa' active={activeItem === 'Reves_holdings_africa'} onClick={this.handleItemClick}>REVES Medical</Menu.Item></Link>
							<Link to='/#contact'><Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>Contact</Menu.Item></Link>
						</Menu>
					</div>
					<Transition visible={visible} animation='slide down' duration={650}>
						<div className={css.menuRes}>
							<Menu className={css.menuItem} stackable pointing secondary size='large' style={{ borderBottom: 'none' }} >
								<Link to='/#home'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item></Link>
								<Link to='/#about'><Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item></Link>
								<Link to='/#managment'><Menu.Item name='Managment' active={activeItem === 'Managment'} onClick={this.handleItemClick}>Managment</Menu.Item></Link>
								<Link to='/reves_holding'><Menu.Item name='Reves_holding' active={activeItem === 'Reves_holding'} onClick={this.border}>REVES Holding</Menu.Item></Link>
								<Link to='/reves_technologies'><Menu.Item name='Reves_technologies' active={activeItem === 'Reves_technologies'} onClick={this.handleItemClick}>REVES Technologies</Menu.Item></Link>
								<Link to='/reves_medical'><Menu.Item name='Reves_holdings_africa' active={activeItem === 'Reves_holdings_africa'} onClick={this.handleItemClick}>REVES Medical</Menu.Item></Link>
								<Link to='/#contact'><Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>Contact</Menu.Item></Link>
							</Menu>
						</div>
					</Transition>
				</div>
			</div>
		)
	}
}

export default Navbar;