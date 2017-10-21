/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Cropper from 'containers/Cropper';
import UploadImageButton from 'containers/UploadImageButton';
import AdminHeader from 'components/AdminHeader';

export default class AdminHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AdminHeader />
        <article>
          <div>
            <section>
            </section>
          </div>
        </article>
      </div>
    );
  }
}
