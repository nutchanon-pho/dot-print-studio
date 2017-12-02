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
import { Link } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import ShopPage from 'containers/ShopPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Menu, Responsive, Icon, Segment, Sidebar } from 'semantic-ui-react';

import { menuList } from 'containers/Menu/constants';
import messages from 'containers/Menu/messages';

const AppWrapper = styled.div``;
const PushableWrapper = styled(Sidebar.Pushable)`
  @media (max-width: 768px) {
    margin-top: 51px !important;
    overflow: hidden !important;
  }
`;

const SidebarPusher = styled(Sidebar.Pusher)`
  @media (max-width: 768px) {
    height: 100vh;
    overflow: scroll !important;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0', sidebarVisible: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

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
              <Link key={eachMenu.name} to={eachMenu.link} onClick={this.hideSidebar}>
                <Menu.Item as="div" name={eachMenu.name}>
                  <FormattedMessage {...messages[eachMenu.text]} />
                </Menu.Item>
              </Link>
            ))}
          </Sidebar>
          <SidebarPusher onClick={this.hideSidebar}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </SidebarPusher>
        </PushableWrapper>
      </AppWrapper>
    );
  }
}
