import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const CropperComponent = (props) => (
  <Cropper
    style={{ height: '800px', width: '100%' }}
    aspectRatio={props.aspectRatio}
    viewMode={3}
    src={props.imageSrc}
    crop={props.onCrop}
    ref={props.inputRef}
  />
);

export default CropperComponent;
