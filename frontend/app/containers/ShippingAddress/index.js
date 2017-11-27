/**
 *
 * BillingDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Button } from 'semantic-ui-react';

export class BillingDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <Form.Input label="ADDRESS 1" type="text" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="ADDRESS 2" type="text" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="CITY" type="text" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="POSTAL CODE" type="text" />
          </Form.Field>
          <Form.Field style={{ textAlign: 'right' }}>
            <Button type="submit">SAVE</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

BillingDetails.propTypes = {
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
)(BillingDetails);
