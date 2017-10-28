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

const Content = styled.div`
margin-left: 220px;
`;

const statisticStyle = {
  padding: '25px',
};

export default class AdminHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AdminMenu />
        <Content>
          <Card.Group>
            <Card fluid color="red" header="Home" />
          </Card.Group>
          <Grid columns={4} stackable>
            <Grid.Row>
              <Grid.Column>
                <Statistic style={statisticStyle}>
                  <Statistic.Value>25</Statistic.Value>
                  <Statistic.Label>Today's Orders</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic style={statisticStyle}>
                  <Statistic.Value>675</Statistic.Value>
                  <Statistic.Label>Today's Visits</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic style={statisticStyle}>
                  <Statistic.Value>122</Statistic.Value>
                  <Statistic.Label>Total Members</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic style={statisticStyle}>
                  <Statistic.Value>12,895</Statistic.Value>
                  <Statistic.Label>This Month's Revenue</Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Content>
      </div>
    );
  }
}
