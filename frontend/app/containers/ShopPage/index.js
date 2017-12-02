import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Menu from 'containers/Menu';
import { Grid, Icon, Segment, Step, Image, Header, Button, Form } from 'semantic-ui-react';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import UploadImageButton from 'containers/UploadImageButton';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectUploadedImage } from 'containers/Cropper/selectors';
import { discardUploadedImage } from 'containers/UploadImageButton/action';
import { compose } from 'redux';
import Cropper from 'containers/Cropper';

import messages from './messages';

const Step1 = ({ uploadedImage, discardUploadedImage }) => (
  <Grid stackable divided columns={2}>
    <Grid.Column textAlign="center">
      <div className="image-upload">
        <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
          <Icon name="add circle" size="massive" />
        </label>
        <UploadImageButton id="file-input" style={{ display: 'none' }} />
      </div>
      <br />
      <div><h1><FormattedMessage {...messages.upload} /></h1></div>
    </Grid.Column>
    <Grid.Column textAlign="center">
      <div><Icon name="image" size="massive" /></div>
      <br />
      <div><h1><FormattedMessage {...messages.chooseFromGallery} /></h1></div>
    </Grid.Column>
    {uploadedImage && <Grid.Column textAlign="center" width={16}>
      <Image size="small" centered src={uploadedImage} />
      <Header as="h3">Is this your image?</Header>
      <Button secondary onClick={discardUploadedImage}>Discard</Button>
      <Link to="/shop/2"><Button primary>Next</Button></Link>
    </Grid.Column>}
  </Grid>
);

const productTypeOptions = [
  { key: 'poster', text: 'Poster', value: 'Poster' },
  { key: 'canvas', text: 'Canvas', value: 'Canvas' },
];

const layoutOptions = [
  { key: 'portrait', text: 'Portrait', value: 'portrait' },
  { key: 'landscape', text: 'Landscape', value: 'landscape' },
];

const sizeOptions = [
  { key: 'a1', text: 'A1', value: 'A1' },
  { key: 'a2', text: 'A2', value: 'A2' },
  { key: 'a3', text: 'A3', value: 'A3' },
];

const posterPaperTypeOptions = [
  { key: '1', text: 'Coated Matte 120g', value: 'Coated Matte 120g' },
  { key: '2', text: 'Coated Matte 200g', value: 'Coated Matte 200g' },
  { key: '3', text: 'Semi Gloss', value: 'Semi Gloss' },
];

const paperSizeInfoMap = {
  A1: { aspectRatio: { portrait: 594.0 / 891.0, landscape: 891.0 / 594.0 } },
  A2: { aspectRatio: { portrait: 420.0 / 594.0, landscape: 594.0 / 420.0 } },
  A3: { aspectRatio: { portrait: 297.0 / 420.0, landscape: 420.0 / 297.0 } },
  A4: { aspectRatio: { portrait: 210.0 / 297.0, landscape: 297.0 / 210.0 } },
};

class Step2 extends Component {
  state = { size: 'A1', layout: 'portrait' };

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
          <Form.Select value={paperType} name="paperType" label="Paper Type" options={posterPaperTypeOptions} placeholder="Paper Type" onChange={this.handleChange} />
        </Form>
      </Segment>
    </Grid.Column>
        <Grid.Column><Cropper aspectRatio={paperSizeInfoMap[size].aspectRatio[layout]} /></Grid.Column>
      </Grid>
    );
  }
}

class ShopPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = { size: 'A1', layout: 'portrait' };

  handleChange = (e, { name, value }) => { this.setState({ [name]: value }); }

  render() {
    const { match: { params: { step } } } = this.props;
    return (
      <article>
        <Helmet>
          <title>Shop Page</title>
          <meta name="description" content="" />
        </Helmet>
        <Menu />
        <Segment basic style={{ marginTop: '150px', minHeight: '350px' }}>
          <Step.Group fluid>
            <Step active={step === '1'}>
              <Icon name="upload" />
              <Step.Content>
                <Step.Description>Upload or Choose from Gallery</Step.Description>
              </Step.Content>
            </Step>
            <Step active={step === '2'}>
              <Icon name="tags" />
              <Step.Content>
                <Step.Description>Configure</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
          <br />
          <Switch>
            <Route exact path="/shop" render={() => (<Redirect to="/shop/1" />)} />
            <Route exact path="/shop/1" component={() => (<Step1 {...this.props} />)} />
            <Route exact path="/shop/2" component={() => (<Step2 {...this.props} state={this.state} handleChange={this.handleChange} />)} />
          </Switch>
        </Segment>
        <Footer />
      </article>
    );
  }
}

ShopPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  uploadedImage: makeSelectUploadedImage(),
});

const withConnect = connect(mapStateToProps, { discardUploadedImage });

// export default withConnect(ShopPage);
export default compose(
  withConnect,
)(ShopPage);
