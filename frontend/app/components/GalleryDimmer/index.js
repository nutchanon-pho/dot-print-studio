/**
*
* GalleryDimmer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Header, Image } from 'semantic-ui-react';
// import styled from 'styled-components';


class GalleryDimmer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>EPHEMERAL CAPTURED</Header>
        <p>by EPHEMERAL</p>
        <p>1200 THB</p>
      </div>
      );

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        fluid
        src={this.props.src}
      />
    );
  }
}

GalleryDimmer.propTypes = {
  src: PropTypes.string,
};

export default GalleryDimmer;
