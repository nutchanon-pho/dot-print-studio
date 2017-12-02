import React, { Component } from 'react';
import CropperComponent from './CropperComponent';
import CropperPreview from 'components/CropperPreview';
import sample from './sample.jpg';
import { createStructuredSelector } from 'reselect';
import { makeSelectUploadedImage } from './selectors';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button, Segment, Icon, Message } from 'semantic-ui-react';

class Cropper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewedImage: '',
    };
  }

  onCrop() {
    // const vm = this;
    // function run() {
    //   vm.setState({
    //     previewedImage: vm.cropper.getCroppedCanvas().toDataURL(),
    //   });
    // }

    // const realFunction =
    //   _.debounce(run, 5000);

    // realFunction();
  }

  rotateLeft = () => {
    this.cropper.rotate(-90);
  }

  rotateRight = () => {
    this.cropper.rotate(90);
  }

  reset = () => {
    this.cropper.reset();
  }

  render() {
    console.log('Cropper render');
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
          imageSrc={this.props.uploadedImage}
          aspectRatio={this.props.aspectRatio}
          inputRef={(el) => { this.cropper = el != null ? el.cropper : null; }}
          onCrop={this.onCrop}
        />
        {/* <CropperPreview previewedImage={this.state.previewedImage} /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  uploadedImage: makeSelectUploadedImage(),
});

// const mapDispatchToProps = (dispatch) => ({
//   onFileUpload: bindActionCreators(uploadImage, dispatch),
// });

export default connect(mapStateToProps)(Cropper);
