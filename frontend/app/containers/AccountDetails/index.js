/**
 *
 * AccountDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Button } from 'semantic-ui-react';

export class AccountDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <Form.Input label="FIRSTNAME" type="text" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="LASTNAME" type="text" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="NEW PASSWORD" type="password" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="CONFIRM NEW PASSWORD" type="password" />
          </Form.Field>
          <Form.Field>
            <Form.Input label="MOBILE PHONE" type="text" />
          </Form.Field>
          <Form.Field style={{ textAlign: 'right' }}>
            <Button type="submit">SAVE</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

AccountDetails.propTypes = {
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
)(AccountDetails);
