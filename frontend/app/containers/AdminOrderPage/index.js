/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import AdminMenu from 'containers/AdminMenu';
import { Card, Container, Grid, Statistic, Image, Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import NewOrderPage from './NewOrderPage';
import WorkingListPage from './WorkingListPage';
import HistoryPage from './HistoryPage';

const panes = [
  { menuItem: 'New Orders', render: () => <NewOrderPage /> },
  { menuItem: 'Working List', render: () => <WorkingListPage /> },
  { menuItem: 'History', render: () => <HistoryPage /> },
];

export default class AdminHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Card.Group>
          <Card fluid color="red" header="Orders" />
        </Card.Group>
        <Grid columns={1}>
          <Grid.Column>
            <Tab panes={panes} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
