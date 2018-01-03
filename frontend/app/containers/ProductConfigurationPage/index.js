/**
 *
 * ProductConfigurationPage
 *
 */

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Icon, Segment, Step, Image, Header, Button, Form } from 'semantic-ui-react';
import Cropper from 'containers/Cropper';
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCroppedImage } from 'containers/Cropper/selectors';
import { cropImage } from 'containers/Cropper/actions';
import { makeSelectSelectedImage } from 'containers/GalleryPage/selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import makeSelectProductConfigurationPage from './selectors';
import { updateForm, useImage, discardConfig } from './actions';
import { productTypeOptions, layoutOptions, sizeOptions, posterPaperTypeOptions, paperSizeInfoMap } from './constants';

export class ProductConfigurationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { size: 'A1', layout: 'portrait' };

  onNext = () => {
    this.props.updateForm(this.state);
    this.props.cropImage();
    this.props.push('/shop/3');
  };

  handleChange = (e, { name, value }) => { this.setState({ [name]: value }); }

  render() {
    const { productType, size, paperType, layout } = this.state;
    const validToGoToNextPage = (productType === 'Poster' && size && paperType && layout) || (productType === 'Canvas' && size && layout);
    return (
      <Grid stackable divided columns={2}>
        <Grid.Column>
          <Segment>
            <Form>
              <Form.Select value={productType} name="productType" label="Product Type" options={productTypeOptions} placeholder="Product Type" onChange={this.handleChange} />
              <Form.Select value={layout} name="layout" label="Layout" options={layoutOptions} placeholder="Layout" onChange={this.handleChange} />
              <Form.Select value={size} name="size" label="Size" options={sizeOptions} placeholder="Size" onChange={this.handleChange} />
              {productType === 'Poster' && <Form.Select value={paperType} name="paperType" label="Paper Type" options={posterPaperTypeOptions} placeholder="Paper Type" onChange={this.handleChange} />}
              <Segment textAlign="right" basic><strong>Price:</strong> 100 THB</Segment>
              <div style={{ textAlign: 'right' }}>
                <Button onClick={this.props.cropImage} color="blue">Preview</Button>
                <Button disabled={!validToGoToNextPage} onClick={this.onNext} color="green">Next</Button>
              </div>
            </Form>
          </Segment>
          <Segment>
            <Header as="h1">Preview</Header>
            <Header as="h3">Layout Preview</Header>
            <Image size="small" centered src={this.props.croppedImage} />
            <Header as="h3">Resolution Preview (Actual Size)</Header>
            <div style={{ overflow: 'scroll', height: '300px' }}>
              <img alt="Resolution Preview" style={{ width: `${paperSizeInfoMap[size].width[layout]}mm` }} src={this.props.croppedImage} />
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Cropper aspectRatio={paperSizeInfoMap[size].aspectRatio[layout]} />
        </Grid.Column>
      </Grid>
    );
  }
}

ProductConfigurationPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  productconfigurationpage: makeSelectProductConfigurationPage(),
  croppedImage: makeSelectCroppedImage(),
  selectedImage: makeSelectSelectedImage(),
});

const withConnect = connect(mapStateToProps, { updateForm, cropImage, push, useImage, discardConfig });

const withReducer = injectReducer({ key: 'productConfig', reducer });
const withSaga = injectSaga({ key: 'productConfiguration', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductConfigurationPage);
