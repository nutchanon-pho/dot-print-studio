import React, { Component } from 'react';
import { Dimmer, Loader, Segment, Image } from 'semantic-ui-react';

class ImageWithStatusText extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, isError: false };
  }

  handleImageLoaded() {
    this.setState({ isLoaded: true });
  }

  handleImageErrored() {
    this.setState({ isError: true });
  }

  render() {
    const loader = !this.state.isLoaded ? (
      <Dimmer active>
        <Loader >Loading</Loader>
      </Dimmer>) : null;
    const segmentStyle = !this.state.isLoaded ? { height: '200px' } : {};
    return (
      <Segment style={segmentStyle}>
        {loader}
        <Image
          fluid
          src={this.props.imageUrl}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </Segment>
    );
  }
}
export default ImageWithStatusText;
