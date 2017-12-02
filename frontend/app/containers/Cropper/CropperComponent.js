import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const CropperComponent = (props) => (
  <Cropper
    style={{ height: '800px', width: '100%' }}
    aspectRatio={props.aspectRatio}
    viewMode={0}
    src={props.imageSrc}
    crop={props.onCrop}
    zoom={props.onCrop}
    ref={props.inputRef}
    rotatable
  />
);

export default CropperComponent;
