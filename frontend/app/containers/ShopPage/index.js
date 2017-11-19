import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from 'containers/Menu';
import { Container, Grid, Icon } from 'semantic-ui-react';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Shop Page</title>
          <meta name="description" content="" />
        </Helmet>
        <Menu />
        <Container style={{ marginTop: '200px', height: '300px' }}>
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
        </Container>
        <Footer />
      </article>
    );
  }
}

HomePage.propTypes = {
};

