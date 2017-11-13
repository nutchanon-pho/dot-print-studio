/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Menu, Image, Responsive, Icon } from 'semantic-ui-react';
import DotPrintLogo from 'images/dotprint-logo.png';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
            <b><FormattedMessage {...messages.menuHome} /></b>
          </Menu.Item>
          <Menu.Item style={paddingForItems} name="shop" active={activeItem === 'shop'} onClick={this.handleItemClick} >
            <FormattedMessage {...messages.menuShop} />
          </Menu.Item>
          <Menu.Item style={paddingForItems} name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuGallery} />
          </Menu.Item>
          <Menu.Item style={paddingForItems} name="inspiration" active={activeItem === 'inspiration'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuInspiration} />
          </Menu.Item>
          <Menu.Item style={paddingForItems} name="ourStory" active={activeItem === 'ourStory'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuOurStory} />
          </Menu.Item>
          <Menu.Item content="LOGIN" active={activeItem === 'login'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuLogin} />
          </Menu.Item>
          <Responsive {...Responsive.onlyComputer}><Menu.Item content="|" /></Responsive>
          <Menu.Item name="register" active={activeItem === 'register'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuRegister} />
          </Menu.Item>
          <Menu.Item name="cart">
            <Icon name="cart" size="large" />
          </Menu.Item>
        </Menu>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
