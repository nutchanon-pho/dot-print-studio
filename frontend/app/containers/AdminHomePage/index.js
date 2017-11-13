/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Card, Grid, Image, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import OrderImage from './order.png';
import VisitImage from './visit.png';
import MemberImage from './members.png';
import IncomeImage from './income.png';

const StyledImage = styled(Image)`
  padding: 15px;
`;

export default class AdminHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const summaryCardData = [
      {
        name: 'Today\'s Orders',
        amount: 244,
        image: OrderImage,
        amountFormat: null,
      },
      {
        name: 'Today\'s Visits',
        amount: 1512,
        image: VisitImage,
        amountFormat: null,
      },
      {
        name: 'Members',
        amount: 144,
        image: MemberImage,
        amountFormat: null,
      },
      {
        name: 'Income',
        amount: 124500.50,
        image: IncomeImage,
        amountFormat: { minimumFractionDigits: 2 },
      },
    ];
    const summaryCardElems = summaryCardData.map((eachCard) => (
      <Grid.Column key={eachCard.name}>
        <Card>
          <Grid columns={2}>
            <Grid.Column textAlign="center">
              <StyledImage src={eachCard.image} centered />
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="middle">
              <Header as="h2" style={{ wordBreak: 'break-word' }}>
                <Header.Content>
                  <FormattedNumber value={eachCard.amount} {...eachCard.amountFormat} />
                  <Header.Subheader>
                    {eachCard.name}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid>
        </Card>
      </Grid.Column>
    ));
    return (
      <div>
        <Card.Group>
          <Card fluid color="red" header="Home" />
        </Card.Group>
        {}
        <Grid columns={4}>
          {summaryCardElems}
        </Grid>
      </div>
    );
  }
}
