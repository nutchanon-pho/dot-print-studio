/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import DotPrintMenu from 'containers/Menu';
import Footer from 'components/Footer';
import { Grid, Image, Segment, Menu, Header, Button } from 'semantic-ui-react';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { Link, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import AccountDetails from 'containers/AccountDetails';
import BillingDetails from 'containers/BillingDetails';
import PurchaseHistory from 'containers/PurchaseHistory';
import PurchaseHistoryDetail from 'containers/PurchaseHistoryDetail/Loadable';

import { logout } from 'containers/App/actions';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'accountDetails' }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state || {};
    const { currentUser } = this.props;
    if (!currentUser) {
      return (<Redirect to="/" />);
    }
    return (
      <article>
        <Helmet>
          <title>Profile Page</title>
          <meta name="description" content="" />
        </Helmet>
        <DotPrintMenu />
        <Segment basic style={{ marginTop: '150px', minHeight: '350px' }}>
          <Grid stackable>
            <Grid.Column computer={3} mobile={8}>
              <Header textAlign="center" as="h1">
                {`${currentUser.get('firstName')}`}<br />
                {`${currentUser.get('lastName')}`}
              </Header>
              <Image src={'https://api.adorable.io/avatars/285/abott@adorable.png'} size="medium" className="circular" />
              <Segment basic textAlign="center"><Button color="red" onClick={() => this.props.logout()}>Logout</Button></Segment>
              <Menu vertical fluid>
                <Link to="/profile/accountDetails">
                  <Menu.Item as="div" name="accountDetails" active={activeItem === 'accountDetails'} onClick={this.handleItemClick}>
                    ACCOUNT DETAILS
                </Menu.Item>
                </Link>
                <Link to="/profile/purchaseHistory">
                  <Menu.Item as="div" name="purchaseHistory" active={activeItem === 'purchaseHistory'} onClick={this.handleItemClick}>
                    PURCHASE HISTORY
                </Menu.Item>
                </Link>
                <Link to="/profile/billingDetails">
                  <Menu.Item as="div" name="billingDetails" active={activeItem === 'billingDetails'} onClick={this.handleItemClick}>
                    BILLING DETAILS
                </Menu.Item>
                </Link>
              </Menu>
            </Grid.Column>
            <Grid.Column computer={13} mobile={8}>
              <Switch>
                <Route exact path="/profile" render={() => (<Redirect to="/profile/accountDetails" />)} />
                <Route path="/profile/accountDetails" component={AccountDetails} />
                <Route path="/profile/purchaseHistory/:id" component={PurchaseHistoryDetail} />
                <Route path="/profile/purchaseHistory" component={PurchaseHistory} />
                <Route path="/profile/billingDetails" component={BillingDetails} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </article>
    );
  }
}

ProfilePage.propTypes = {
  currentUser: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps, { logout });

export default compose(
  withConnect,
)(ProfilePage);
