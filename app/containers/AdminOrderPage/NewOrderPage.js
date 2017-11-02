/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import AdminMenu from 'containers/AdminMenu';
import { Card, Container, Grid, Statistic, Image, Tab, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class NewOrderPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = [{
      invoiceNumber: '34923423',
      product: 'Canvas',
      detail: '30x30',
      volume: 1,
    }, {
      invoiceNumber: '5804893',
      product: 'Poster',
      detail: 'A3',
      volume: 2,
    }];
    return (
      <Tab.Pane>
        <Grid>
          <Grid.Column floated="left" width={5}>
            <Header as="h1">New Order</Header>
          </Grid.Column>
          <Grid.Column floated="right" width={5} textAlign="right">
            <Button primary>Add to Working List</Button>
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column>
            <ReactTable
              data={data}
              columns={[
                {
                  Header: 'Invoice Number',
                  accessor: 'invoiceNumber',
                },
                {
                  Header: 'Product',
                  accessor: 'product',
                },
                {
                  Header: 'Detail',
                  accessor: 'detail',
                },
                {
                  Header: 'Volume',
                  accessor: 'volume',
                },
              ]}
              defaultPageSize={25}
              className="-striped -highlight"
            />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://static.pexels.com/photos/34950/pexels-photo.jpg" />
            <div>
              <Grid columns={2}>
                <Grid.Column width={5}>
                  <div><strong>Product:</strong></div>
                  <div><strong>Size:</strong></div>
                  <div><strong>Border:</strong></div>
                  <div><strong>Volume:</strong></div>
                  <br />
                  <div><strong>Email:</strong></div>
                  <div><strong>Tel:</strong></div>
                  <div><strong>Name:</strong></div>
                  <div><strong>Address:</strong></div>
                </Grid.Column>
                <Grid.Column width={11}>
                  <div>Canvas</div>
                  <div>A3</div>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
        </Grid>
      </Tab.Pane>
    );
  }
}
