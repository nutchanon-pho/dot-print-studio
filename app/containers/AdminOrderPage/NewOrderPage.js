/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Grid, Image, Tab, Header, Button } from 'semantic-ui-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Set } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedNewOrder } from './selectors';
import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectNewOrder, unselectNewOrder } from './actions';
import _ from 'lodash';

class NewOrderPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { viewingOrder: {} };
    this.trPropsFn = this.trPropsFn.bind(this);
  }

  onSelectWork(event, row) {
    const isChecked = event.target.checked;
    const invoiceNumber = _.get(row, 'original.invoiceNumber');
    if (isChecked && invoiceNumber) {
      this.props.selectNewOrder(invoiceNumber);
    } else if (!isChecked && invoiceNumber) {
      this.props.unselectNewOrder(invoiceNumber);
    }
  }

  trPropsFn(state, rowInfo, column, instance) {
    const currentRowIndex = _.get(rowInfo, 'index', null);
    const currentStateRowIndex = _.get(this.state, 'viewingOrder.index', 0);
    const isViewing = currentRowIndex === currentStateRowIndex;

    return {
      onClick: (e) => {
        this.setState({
          viewingOrder: rowInfo,
        });
      },
      style: {
        background: isViewing ? '#00afec' : 'white',
        color: isViewing ? 'white' : 'black',
      },
    };
  }

  render() {
    const data = [{
      invoiceNumber: '34923423',
      product: 'Canvas',
      detail: '30x30',
      volume: 1,
      image: 'http://lorempixel.com/400/200?1',
    }, {
      invoiceNumber: '5804893',
      product: 'Poster',
      detail: 'A3',
      volume: 2,
      image: 'http://lorempixel.com/400/200?2',
    }];
    const currentViewingOrder = _.get(this.state, 'viewingOrder.original', data[0]);
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
              getTrProps={this.trPropsFn}
              data={data}
              columns={[
                {
                  Header: '',
                  width: 30,
                  Cell: (row) => (
                    <input type="checkbox" onChange={(event) => this.onSelectWork(event, row)} />
                    ),
                },
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
            <Image src={currentViewingOrder.image} />
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
                  <div>{currentViewingOrder.product}</div>
                  <div>{currentViewingOrder.detail}</div>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
        </Grid>
      </Tab.Pane>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  selectedNewOrder: makeSelectSelectedNewOrder(),
});

const withReducer = injectReducer({ key: 'adminOrder', reducer });
const withConnect = connect(mapStateToProps, { selectNewOrder, unselectNewOrder });

export default compose(
  withReducer,
  withConnect
)(NewOrderPage);
