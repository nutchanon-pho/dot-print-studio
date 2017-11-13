/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Grid, Tab, Header, Button } from 'semantic-ui-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedNewOrder, makeSelectWorkingList, makeSelectNewOrderList } from './selectors';
import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectNewOrder, unselectNewOrder, addToWorkingList } from './actions';
import _ from 'lodash';
import Image from './Image';

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

  handleCheckedValue(row) {
    const invoiceNumber = _.get(row, 'original.invoiceNumber');
    return this.props.selectedNewOrder.has(invoiceNumber);
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
    const data = this.props.newOrderList.toJS();
    const currentViewingOrder = _.get(this.state, 'viewingOrder.original', _.get(data, '[0]'));
    return (
      <Tab.Pane>
        <Grid>
          <Grid.Column floated="left" width={5}>
            <Header as="h1">New Order</Header>
          </Grid.Column>
          <Grid.Column floated="right" width={5} textAlign="right">
            <Button primary onClick={() => this.props.addToWorkingList(this.props.selectedNewOrder)}>Add to Working List</Button>
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <ReactTable
              getTrProps={this.trPropsFn}
              data={data}
              width="100%"
              columns={[
                {
                  Header: '',
                  width: 20,
                  Cell: (row) => (
                    <input
                      type="checkbox" checked={this.handleCheckedValue(row)} onChange={(event) => this.onSelectWork(event, row)}
                    />
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
                  Header: 'Size',
                  accessor: 'size',
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
          <Grid.Column width={6}>
            <Image imageUrl={currentViewingOrder.image} />
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
  workingList: makeSelectWorkingList(),
  newOrderList: makeSelectNewOrderList(),
});

const withReducer = injectReducer({ key: 'adminOrder', reducer });
const withConnect = connect(mapStateToProps, { selectNewOrder, unselectNewOrder, addToWorkingList });

export default compose(
  withReducer,
  withConnect
)(NewOrderPage);
