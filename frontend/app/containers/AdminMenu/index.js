/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { selectAdminMenu } from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectActiveAdminMenu } from './selectors';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

const indentStyle = {
  paddingLeft: '45px',
};

class AdminMenu extends Component {
  constructor(props) {
    super(props);
    this.props.selectAdminMenu('home');
    this.handleItemClick = this.handleItemClick.bind(this);
  }


  handleItemClick(e, { name }) {
    this.props.selectAdminMenu(name);
  }

  render() {
    console.log('this.props', this.props);
    console.log(this.props.history);
    const { activeAdminMenu } = this.props;
    return (
      <Menu inverted vertical fixed="left">
        <Link to="/admin">
          <Menu.Item name="home" active={activeAdminMenu === 'home'} onClick={this.handleItemClick} />
        </Link>
        <Link to="/admin/order">
          <Menu.Item name="order" active={activeAdminMenu === 'order'} onClick={this.handleItemClick} />
        </Link>
        <Menu.Item name="report" active={activeAdminMenu === 'report'} onClick={this.handleItemClick} />
        <Menu.Item name="member information" active={activeAdminMenu === 'member information'} onClick={this.handleItemClick} />
        <Menu.Item header>
          Product Management
        </Menu.Item>
        <Menu.Item style={indentStyle} name="gallery" active={activeAdminMenu === 'gallery'} onClick={this.handleItemClick} />
        <Menu.Item style={indentStyle} name="settings" active={activeAdminMenu === 'settings'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  activeAdminMenu: makeSelectActiveAdminMenu(),
});

const withReducer = injectReducer({ key: 'adminMenu', reducer });
const withConnect = connect(mapStateToProps, { selectAdminMenu });

export default compose(
  withReducer,
  withConnect
)(AdminMenu);
