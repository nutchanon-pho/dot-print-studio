import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;


export default (props) => (
  <Wrapper>
    <img style={{ width: '297mm' }} src={props.previewedImage} alt="Preview of the Cropped Area" />
  </Wrapper>
);
