/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Image, Responsive, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import DotPrintLogo from 'images/dotprint-logo.png';
import injectReducer from 'utils/injectReducer';
import Modal from 'components/Modal';
import LoginForm from 'containers/LoginForm';
import RegisterForm from 'containers/RegisterForm';
import { makeSelectCurrentUser } from 'containers/App/selectors';

import reducer from './reducer';
import messages from './messages';
import { makeSelectActiveMenu } from './selectors';
import { selectMenu } from './actions';


const paddingForItems = { paddingRight: '75px' };

const Login = () => (
  <Modal
    trigger={<Menu.Item><FormattedMessage {...messages.menuLogin} /></Menu.Item>}
    header="LOGIN"
    description={<LoginForm />}
  />
);

const Register = () => (
  <Modal
    trigger={<Menu.Item><FormattedMessage {...messages.menuRegister} /></Menu.Item>}
    header="REGISTER"
    description={<RegisterForm />}
  />
);

class DotPrintMenu extends Component {

  handleItemClick = (e, { name }) => this.props.selectMenu(name)

  render() {
    const { activeMenu, currentUser } = this.props;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Image src={DotPrintLogo} style={{ width: '150px' }} centered />
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <Image src={DotPrintLogo} style={{ width: '150px', position: 'absolute', marginTop: '35px', marginLeft: '55px' }} />
        </Responsive>
        <Menu stackable style={{ paddingTop: '55px', paddingRight: '100px' }} text size="large" floated="right">
          <Menu.Item as="div" style={paddingForItems} name="home" active={activeMenu === 'home'} onClick={this.handleItemClick}>
            <Link to="/">
              <b><FormattedMessage {...messages.menuHome} /></b>
            </Link>
          </Menu.Item>
          <Menu.Item as="div" style={paddingForItems} name="shop" active={activeMenu === 'shop'} onClick={this.handleItemClick} >
            <Link to="/shop">
              <FormattedMessage {...messages.menuShop} />
            </Link>
          </Menu.Item>
          <Menu.Item as="div" style={paddingForItems} name="gallery" active={activeMenu === 'gallery'} onClick={this.handleItemClick}>
            <Link to="/gallery">
              <FormattedMessage {...messages.menuGallery} />
            </Link>
          </Menu.Item>
          <Menu.Item style={paddingForItems} name="inspiration" active={activeMenu === 'inspiration'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuInspiration} />
          </Menu.Item>
          <Menu.Item style={paddingForItems} name="ourStory" active={activeMenu === 'ourStory'} onClick={this.handleItemClick}>
            <FormattedMessage {...messages.menuOurStory} />
          </Menu.Item>
          {!currentUser && <Login />}
          {!currentUser && <Responsive {...Responsive.onlyComputer}><Menu.Item content="|" /></Responsive>}
          {!currentUser && <Register />}
          {currentUser && <Menu.Item as="div" style={paddingForItems}>
            <Link to="/profile">
              <strong>{currentUser.get('firstName')}</strong>
            </Link>
          </Menu.Item>}
          <Menu.Item name="cart">
            <Icon name="cart" size="large" />
          </Menu.Item>
        </Menu>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

DotPrintMenu.propTypes = {
  activeMenu: PropTypes.string,
  selectMenu: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  activeMenu: makeSelectActiveMenu(),
  currentUser: makeSelectCurrentUser(),
});

const withReducer = injectReducer({ key: 'menu', reducer });
const withConnect = connect(mapStateToProps, { selectMenu });

export default compose(
  withReducer,
  withConnect
)(DotPrintMenu);
