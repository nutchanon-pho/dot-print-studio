/**
 *
 * PurchaseHistory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu, Segment, Button } from 'semantic-ui-react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';

const items = [
  {
    orderNumber: '5743840',
    orderDate: '11/11/2017',
    netTotal: 560.50,
    status: 'Delivered',
  },
  {
    orderNumber: '5743840',
    orderDate: '11/11/2017',
    netTotal: 560.50,
    status: 'Delivered',
  }, {
    orderNumber: '5743840',
    orderDate: '11/11/2017',
    netTotal: 560.50,
    status: 'Delivered',
  }, {
    orderNumber: '5743840',
    orderDate: '11/11/2017',
    netTotal: 560.50,
    status: 'Delivered',
  }, {
    orderNumber: '5743840',
    orderDate: '11/11/2017',
    netTotal: 560.50,
    status: 'Delivered',
  }, {
    orderNumber: '5743840',
    orderDate: '11/11/2017',
    netTotal: 560.50,
    status: 'Delivered',
  },
];

export class PurchaseHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: '10' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <ReactTable
          data={items}
          width="100%"
          columns={[
            {
              Header: 'Order Number',
              accessor: 'orderNumber',
            },
            {
              Header: 'Order Date',
              accessor: 'orderDate',
            },
            {
              Header: 'Net Total',
              accessor: 'netTotal',
            },
            {
              Header: 'Status',
              accessor: 'status',
            },
            {
              Header: '',
              Cell: (row) =>
              (
                <Link to={`purchaseHistory/${row.original.orderNumber}`}><Button primary>View</Button></Link>
              ),
            },
          ]}
          defaultPageSize={25}
          className="-striped -highlight"
        />
        <Segment basic textAlign="center">
          <Menu pagination>
            <Menu.Item name="1" active={activeItem === '1'} onClick={this.handleItemClick} />
            <Menu.Item disabled>...</Menu.Item>
            <Menu.Item name="10" active={activeItem === '10'} onClick={this.handleItemClick} />
            <Menu.Item name="11" active={activeItem === '11'} onClick={this.handleItemClick} />
            <Menu.Item name="12" active={activeItem === '12'} onClick={this.handleItemClick} />
          </Menu>
        </Segment>
      </div>
    );
  }
}

PurchaseHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(PurchaseHistory);
