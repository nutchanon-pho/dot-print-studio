/**
 *
 * ProductConfigurationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Icon, Segment, Step, Image, Header, Button, Form } from 'semantic-ui-react';
import Cropper from 'containers/Cropper';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductConfigurationPage from './selectors';
import { makeSelectCroppedImage } from 'containers/Cropper/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { updateForm } from './actions';
import { cropImage } from 'containers/Cropper/actions';
import { productTypeOptions, layoutOptions, sizeOptions, posterPaperTypeOptions, paperSizeInfoMap } from './constants';

export class ProductConfigurationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { size: 'A1', layout: 'portrait' };

  onNext = () => {
    this.props.updateForm(this.state);
    this.props.cropImage();
  };

  handleChange = (e, { name, value }) => { this.setState({ [name]: value }); }

  render() {
    const { productType, size, paperType, layout } = this.state;
    return (
      <Grid stackable divided columns={2}>
        <Grid.Column>
          <Segment>
            <Form>
              <Form.Select value={productType} name="productType" label="Product Type" options={productTypeOptions} placeholder="Product Type" onChange={this.handleChange} />
              <Form.Select value={layout} name="layout" label="Layout" options={layoutOptions} placeholder="Layout" onChange={this.handleChange} />
              <Form.Select value={size} name="size" label="Size" options={sizeOptions} placeholder="Size" onChange={this.handleChange} />
              {productType === 'Poster' && <Form.Select value={paperType} name="paperType" label="Paper Type" options={posterPaperTypeOptions} placeholder="Paper Type" onChange={this.handleChange} />}
              <div style={{ textAlign: 'right' }}>
                <Button onClick={this.props.cropImage} color="blue">Preview</Button>
                <Button onClick={this.onNext} color="green">Next</Button>
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
});

const withConnect = connect(mapStateToProps, { updateForm, cropImage });

const withReducer = injectReducer({ key: 'productConfiguration', reducer });
const withSaga = injectSaga({ key: 'productConfiguration', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductConfigurationPage);
