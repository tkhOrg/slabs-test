import React from 'react';
import {Grid, Cell } from 'react-foundation';
import twitter from '../images/twitter-logo.svg';
import insta from '../images/instagram-logo.svg';




const Footer = () => {
  return (
      <footer>
          <Grid className='display'>
            <Cell large={12} className='footer-wrapper'>
                <a href="https://www.instagram.com/spatial_labs/" alt='instagram' target="_blank" rel="noreferrer" className='insta'><img src={insta}/></a>
                <a href="https://twitter.com/spatial_labs/" target="_blank" alt='twitter' rel="noreferrer" className="twitter"><img src={twitter}/></a>        
            </Cell>
          </Grid>
        
    </footer>
  )
};

export default Footer;