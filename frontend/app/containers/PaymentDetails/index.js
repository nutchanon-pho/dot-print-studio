/**
 *
 * PaymentDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Form, Button, Segment } from 'semantic-ui-react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles-compiled.css';
import Payment from 'payment';

import messages from './messages';

export class PaymentDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      number: '4242424242424242',
      name: 'Terry Clapp',
      expiry: '0919',
      cvc: '444',
      focused: 'name',
      isChangeButtonShow: true,
    };
  }

  componentDidMount() {
    Payment.formatCardNumber(document.querySelector('[name="number"]'));
    Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
    Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
  }

  handleInputFocus = (e) => {
    const target = e.target;

    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = (e) => {
    const target = e.target;
    if (target.name === 'number') {
      this.setState({
        [target.name]: target.value.replace(/ /g, ''),
      });
    } else if (target.name === 'expiry') {
      this.setState({
        [target.name]: target.value.replace(/ |\//g, ''),
      });
    } else {
      this.setState({
        [target.name]: target.value,
      });
    }
  };

  handleCallback(type, isValid) {
    console.log(type, isValid); // eslint-disable-line no-console
  }

  render() {
    const { name, number, expiry, cvc, focused, isChangeButtonShow } = this.state;
    const formDisplay = !isChangeButtonShow ? {} : { display: 'none' };
    return (
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={this.handleCallback}
        />
        {isChangeButtonShow && <Segment basic textAlign="center">
          <Button type="submit" color="green" onClick={() => this.setState({ isChangeButtonShow: false })}>
              CHANGE
            </Button>
        </Segment>}
        <br />
        <Form style={formDisplay}>
          <Form.Field>
            <Form.Input name="number" label="CARD NUMBER" type="text" onKeyUp={this.handleInputChange} onFocus={this.handleInputFocus} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="name" label="FULL NAME" type="text" onKeyUp={this.handleInputChange} onFocus={this.handleInputFocus} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="expiry" label="EXPIRY" type="text" onKeyUp={this.handleInputChange} onFocus={this.handleInputFocus} />
          </Form.Field>
          <Segment basic textAlign="right">
            <Button type="submit">
              SUBMIT
            </Button>
          </Segment>
        </Form>
      </div>
    );
  }
}

PaymentDetails.propTypes = {
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
)(PaymentDetails);
