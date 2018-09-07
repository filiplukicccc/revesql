import React from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import image from '../../../images/blured.jpg';
import scss from '../../styles/styles.scss';
import style from './styleHol.css';
import { Parallax } from 'react-parallax';

const AboutHolding = () => (
    <div style={{ width: '100%' }}>
        <Parallax bgImage={image}>
            <div style={{ height: '400px' }}>
                <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.70)', position: 'absolute', top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className={scss.rotated}>REVES <div>HOLDING</div></h1>
                </div>
            </div>
        </Parallax>
        <Grid>
            <GridRow centered>
                <GridColumn computer={4} tablet={7} mobile={14}>
                    <h2 style={{ textAlign: 'center' }}>ABOUT US</h2>
                    <p>REVES Holding is a leading investment holding company based in Belgrade, Serbia. Our long-term goals are to further diversify our holding portfolio and to help companies realising their growth potential by providing them with patient capital and outstanding operational support.</p>
                </GridColumn>
                <GridColumn computer={6} tablet={7} mobile={14}>
                    <h2 style={{ textAlign: 'center' }}>OUR VISION</h2>
                    <p>Our strategic emphasis is on identifying the most promising business opportunities to invest and realize value from undervalued assets. We have a profound understanding of a variety of sectors, including finance, trading, commerce, real estate and gastronomy. Our strong network across Central and Eastern European Countries is key to our success and stimulates continuous business development and diversification.</p>
                </GridColumn>
            </GridRow>
            <GridRow style={{ marginBottom: '60px' }} centered>
                <GridColumn computer={10} tablet={12} mobile={14}>
                    <h2 className={style.corporate} style={{ textAlign: 'center' }}>CORPORATE DEVELOPMENT</h2>
                    <p>Our investments span a wide range of industries across Central and Eastern European countries. REVES Holding provides more than just capital.<br />We provide our portfolio companies with our global network and strategic guidance on operational improvements, such as turnover growth, IT optimization and market expansion.</p>
                </GridColumn>
            </GridRow>
        </Grid>
    </div>
)

export default AboutHolding;
