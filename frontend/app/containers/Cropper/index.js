import React, { Component } from 'react';
// import CropperPreview from 'components/CropperPreview';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';
import { makeSelectSelectedImage } from 'containers/GalleryPage/selectors';
import { Button, Segment, Icon, Message } from 'semantic-ui-react';
import injectReducer from 'utils/injectReducer';
import reducer from 'containers/ProductConfigurationPage/reducer';
import { makeSelectUploadedImage, makeSelectCropper } from './selectors';
import { initializeCropper } from './actions';
import CropperComponent from './CropperComponent';

class Cropper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewedImage: '',
    };
  }

  onRef = (el) => {
    const cropper = el != null ? el.cropper : null;
    this.props.initializeCropper(cropper);
  }

  rotateLeft = () => {
    this.props.cropper.rotate(-90);
  }

  rotateRight = () => {
    this.props.cropper.rotate(90);
  }

  reset = () => {
    this.props.cropper.reset();
  }

  render() {
    let image;
    if (this.props.uploadedImage) {
      image = this.props.uploadedImage;
    } else if (this.props.selectedImageFromGallery && this.props.selectedImageFromGallery.image) {
      image = this.props.selectedImageFromGallery.image;
    }
    return (
      <div>
        <Segment basic textAlign="center">
          <Button.Group>
            <Button primary onClick={this.rotateLeft}><Icon name="undo" /></Button>
            <Button.Or />
            <Button primary onClick={this.rotateRight}><Icon name="repeat" /></Button>
          </Button.Group>
          &nbsp;
          <Button color="red" onClick={this.reset}>Reset</Button>
          <Message>
            <Message.Header>
              Tips
            </Message.Header>
            <p>Double click on the Cropper to toggle beween "Drag Mode" and "Crop Mode"</p>
          </Message>
        </Segment>
        <CropperComponent
          imageSrc={image}
          aspectRatio={this.props.aspectRatio}
          inputRef={this.onRef}
          onCrop={this.onCrop}
        />
        {/* <CropperPreview previewedImage={this.state.previewedImage} /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cropper: makeSelectCropper(),
  uploadedImage: makeSelectUploadedImage(),
  selectedImageFromGallery: makeSelectSelectedImage(),
});

const withReducer = injectReducer({ key: 'productConfig', reducer });

const withConnect = connect(mapStateToProps, { initializeCropper });

export default compose(
  withReducer,
  withConnect,
)(Cropper);
