/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DotPrintModal = (props) => (
  <Modal size="small" trigger={props.trigger}>
    <Modal.Header>{props.header}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        {props.description}
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

DotPrintModal.propTypes = {
  description: PropTypes.element,
  trigger: PropTypes.element,
  header: PropTypes.string,
};

export default DotPrintModal;
