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
        <Card.Group>
          <Card fluid color="red" header="Orders" />
        </Card.Group>
      </div>
    );
  }
}
