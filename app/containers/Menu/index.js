/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Menu, Image, Responsive } from 'semantic-ui-react';
import DotPrintLogo from 'images/dotprint-logo.png';

const paddingForItems = { paddingRight: '75px' };

export default class DotPrintMenu extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Image src={DotPrintLogo} style={{ width: '150px' }} centered />
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <Image src={DotPrintLogo} style={{ width: '150px', position: 'absolute', marginTop: '35px', marginLeft: '55px' }} />
        </Responsive>
        <Menu stackable style={{ paddingTop: '55px', paddingRight: '100px' }} text size="large" floated="right">
          <Menu.Item style={paddingForItems} name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
            <b>HOME</b>
          </Menu.Item>
          <Menu.Item style={paddingForItems} content="SHOP" name="shop" active={activeItem === 'shop'} onClick={this.handleItemClick} />
          <Menu.Item style={paddingForItems} content="GALLERY" name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick} />
          <Menu.Item style={paddingForItems} content="INSPIRATION" name="inspiration" active={activeItem === 'inspiration'} onClick={this.handleItemClick} />
          <Menu.Item style={paddingForItems} content="OUR STORY" name="ourStory" active={activeItem === 'ourStory'} onClick={this.handleItemClick} />
          <Menu.Item content="LOGIN" name="login" active={activeItem === 'login'} onClick={this.handleItemClick} />
          <Responsive {...Responsive.onlyComputer}><Menu.Item content="|" /></Responsive>
          <Menu.Item content="REGISTER" name="register" active={activeItem === 'register'} onClick={this.handleItemClick} />
        </Menu>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
