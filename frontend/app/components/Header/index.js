import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Container, Input, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react';

class AppHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src="/logo.png" />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="shop"
          active={activeItem === 'shop'}
          onClick={this.handleItemClick}
        >
          Shop
        </Menu.Item>

        <Menu.Item
          name="gallery"
          active={activeItem === 'gallery'}
          onClick={this.handleItemClick}
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          name="inspiration"
          active={activeItem === 'inspiration'}
          onClick={this.handleItemClick}
        >
          Inspiration
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default AppHeader;
