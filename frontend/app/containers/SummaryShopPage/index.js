/**
 *
 * SummaryShopPage
 *
 */

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Image, Grid, Segment, Header } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCroppedImage } from 'containers/Cropper/selectors';
import makeSelectProductConfigurationPage from 'containers/ProductConfigurationPage/selectors';
import makeSelectSummaryShopPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class SummaryShopPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let productType;
    let layout;
    let size;
    let paperType;

    if (this.props.productConfiguration) {
      const productConfiguration = this.props.productConfiguration;
      productType = _.get(productConfiguration, 'form.productType');
      layout = _.get(productConfiguration, 'form.layout');
      size = _.get(productConfiguration, 'form.size');
      paperType = _.get(productConfiguration, 'form.paperType');
    }
    return (
      <div>
        <Header as="h1">Product Summary</Header>
        <Grid padded>
          <Grid.Column width="16">
            <Segment>
              <Grid>
                <Grid.Column width="6"><Image centered size="small" src={this.props.croppedImage} /></Grid.Column>
                <Grid.Column width="10">
                  <div><strong>Product Type:</strong> {productType}</div>
                  <div><strong>Layout:</strong> {layout}</div>
                  <div><strong>Size:</strong> {size}</div>
                  {paperType && <div><strong>Paper Type:</strong> {paperType}</div>}
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SummaryShopPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  summaryshoppage: makeSelectSummaryShopPage(),
  croppedImage: makeSelectCroppedImage(),
  productConfiguration: makeSelectProductConfigurationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'summaryShopPage', reducer });
const withSaga = injectSaga({ key: 'summaryShopPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SummaryShopPage);
