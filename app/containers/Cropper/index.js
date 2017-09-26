import React, { Component } from 'react';
import CropperComponent from './CropperComponent';
import CropperPreview from 'components/CropperPreview';
import sample from './sample.jpg';

export default class Cropper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewedImage: '',
    };

    this.onCrop = this.onCrop.bind(this);
  }

  onCrop() {
    this.setState({
      previewedImage: this.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  render() {
    return (
      <div>
        <CropperComponent
          imageSrc={sample}
          aspectRatio={297 / 210}
          inputRef={(el) => (this.cropper = el)}
          onCrop={this.onCrop}
        />
        <CropperPreview previewedImage={this.state.previewedImage} />
      </div>
    );
  }
}
