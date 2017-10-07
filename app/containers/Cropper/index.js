import React, { Component } from 'react';
import CropperComponent from './CropperComponent';
import CropperPreview from 'components/CropperPreview';
import sample from './sample.jpg';
import { createStructuredSelector } from 'reselect';
import { makeSelectUploadedImage } from './selectors';
import { connect } from 'react-redux';
import _ from 'lodash';

class Cropper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewedImage: '',
    };

    this.onCrop = this.onCrop.bind(this);
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

  render() {
    return (
      <div>
        <CropperComponent
          imageSrc={this.props.uploadedImage}
          aspectRatio={297 / 210}
          inputRef={(el) => (this.cropper = el)}
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
