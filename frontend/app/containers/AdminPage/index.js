/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import AdminMenu from 'containers/AdminMenu';
import { Card, Container, Grid, Statistic, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import AdminHomePage from 'containers/AdminHomePage/Loadable';
import AdminOrderPage from 'containers/AdminOrderPage/Loadable';

const Content = styled.div`
margin-left: 220px;
`;

const statisticStyle = {
  padding: '25px',
};

export default class AdminPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AdminMenu />
        <Content>
          <Switch>
            <Route exact path="/admin" component={AdminHomePage} />
            <Route exact path="/admin/order" component={AdminOrderPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}
