import React, { Component } from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';
import logo from '../../../images/RRRTFCJ (1).png';

class Footer extends Component {
	render() {
		return (
			<div>
				<Grid style={{ margin: '0px' }}>
					<GridRow centered style={{ background: 'rgba(14,39,81,1)', color: 'white', padding: '40px 0' }}>
						<GridColumn computer={4} tablet={7} mobile={12}>
							<img width='180px' src={logo} />
						</GridColumn>
						<GridColumn computer={4} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>REGISTERED OFFICE</h4>
							<p>Beogradska 114a<br />
								11277 Belgrade (Ugrinovci)<br />
								Serbia</p>
						</GridColumn>
						{/* <GridColumn computer={3} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>BRANCH OFFICE</h4>
							<p>BRANCH OFFICE<br />
								Praska 36/8<br />
								11131 Beograd (Čukarica)
								Serbia
							</p>
						</GridColumn> */}
						<GridColumn computer={4} tablet={7} mobile={12}>
							<h4 style={{ textAlign: 'center' }}>CONTACT US</h4>
							<p>Phone: +381 11 405 1672<br /><br />
								office@reves-holding.com
							</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}
export default Footer;
