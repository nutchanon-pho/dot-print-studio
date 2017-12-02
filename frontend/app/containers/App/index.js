/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import HomePage from 'containers/HomePage/Loadable';
import ShopPage from 'containers/ShopPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Menu, Image, Responsive, Icon, Button, Grid, Segment, Sidebar, Header } from 'semantic-ui-react';

import { menuList } from 'containers/Menu/constants';
import messages from 'containers/Menu/messages';

const AppWrapper = styled.div``;
const PushableWrapper = styled(Sidebar.Pushable)`
  @media (max-width: 768px) {
    margin-top: 51px !important;
  }
`;

export default class App extends Component {
  state = { sidebarVisible: false }

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

  hideSidebar = () => this.state.sidebarVisible ? this.setState({ sidebarVisible: false }) : null;

  render() {
    const { sidebarVisible } = this.state;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="Dot Print"
          defaultTitle="Dot Print"
        >
          <meta name="description" content="Dot Print" />
        </Helmet>
        <Responsive maxWidth={768}>
          <Menu fixed="top">
            <Segment basic>
              <Icon style={{ cursor: 'pointer' }} name="content" size="large" onClick={this.toggleSidebarVisibility} />
            </Segment>
          </Menu>
        </Responsive>
        <PushableWrapper as={Segment}>
          <Sidebar as={Menu} animation="overlay" width="thin" visible={sidebarVisible} icon="labeled" vertical inverted>
            {menuList.map((eachMenu) => (
              <Menu.Item name={eachMenu.name}>
                <FormattedMessage {...messages[eachMenu.text]} />
              </Menu.Item>
            ))}
          </Sidebar>
          <Sidebar.Pusher onClick={this.hideSidebar}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Sidebar.Pusher>
        </PushableWrapper>
      </AppWrapper>
    );
  }
}
