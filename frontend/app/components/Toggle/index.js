/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';
import { injectIntl, intlShape } from 'react-intl';

function Toggle(props) {
  const { intl } = props;
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => {
      const message = props.messages[value];
      const intlMessage = message ? intl.formatMessage(message) : value;
      return {
        value,
        text: intlMessage,
      };
    });
  }

  return (
    <Dropdown upward defaultValue={props.value} options={content} onChange={props.onToggle} />
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(Toggle);
