import React from 'react';
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

const options = [
  { key: 'poster', text: 'Poster', value: 'poster' },
  { key: 'canvas', text: 'Canvas', value: 'canvas' },
];

const Step2 = () => (
  <Grid stackable divided columns={2}>
    <Grid.Column>
      <Segment>
        <Form>
          <Form.Select label="Product Type" options={options} placeholder="Product Type" />
        </Form>
      </Segment>
    </Grid.Column>
    <Grid.Column><Cropper /></Grid.Column>
  </Grid>
);


class ShopPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
            <Route exact path="/shop/2" component={() => (<Step2 {...this.props} />)} />
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
