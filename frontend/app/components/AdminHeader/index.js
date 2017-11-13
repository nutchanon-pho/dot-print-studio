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
    const menuList = ['Home', 'Gallery', 'Product', 'Report'];
    const menuListProps = menuList.map((eachMenu) => ({ name: eachMenu, active: activeItem === eachMenu, onClick: this.handleItemClick.bind(this) }));
    const menuListElem = menuListProps.map((eachMenuProps) => (<Menu.Item {...eachMenuProps}>{eachMenuProps.name}</Menu.Item>));

    return (
      <Menu stackable>
        {menuListElem}
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
