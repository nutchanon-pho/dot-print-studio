import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from 'containers/Menu';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


export default class ShopPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Shop Page</title>
          <meta name="description" content="" />
        </Helmet>
        <Menu />
        <Segment basic style={{ marginTop: '150px', minHeight: '350px' }}>
          <Grid stackable divided columns={2}>
            <Grid.Column textAlign="center">
              <div><Icon name="add circle" size="massive" /></div>
              <br />
              <div><h1><FormattedMessage {...messages.upload} /></h1></div>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <div><Icon name="image" size="massive" /></div>
              <br />
              <div><h1><FormattedMessage {...messages.chooseFromGallery} /></h1></div>
            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </article>
    );
  }
}

ShopPage.propTypes = {
};

