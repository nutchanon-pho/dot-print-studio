import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { uploadImage } from './action';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

class UploadImageButton extends Component {

  constructor(props) {
    super(props);

    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileUpload(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      // this.setState({ src: reader.result });
      this.props.onFileUpload(reader.result);
    };
    reader.readAsDataURL(files[0]);
  }

  render() {
    const { onFileUpload, ...other } = this.props;
    return <input {...other} type="file" onChange={this.onFileUpload} />;
  }
}

UploadImageButton.propTypes = {
  onFileUpload: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onFileUpload: bindActionCreators(uploadImage, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'cropper', reducer });

export default compose(
  withReducer,
  withConnect,
)(UploadImageButton);
