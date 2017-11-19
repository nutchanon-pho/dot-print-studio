/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Menu from 'containers/Menu';
import Slider from 'react-slick';
import { Image, Grid, Step, Icon, Container, Header } from 'semantic-ui-react';
import Footer from 'components/Footer';
import NextArrow from 'components/NextArrow';
import PrevArrow from 'components/PrevArrow';
import DotPrintMap from 'components/DotPrintMap';
import GradientArea from 'components/GradientArea';

import messages from './messages';

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  accessibility: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <GradientArea>
          <Menu />
          <div style={{ marginTop: '100px', paddingBottom: '50px', maxHeight: '600px' }}>
            <Slider {...settings} >
              <div><Image centered src="https://picsum.photos/600/400?image=0" /></div>
              <div><Image centered src="https://picsum.photos/600/400?image=1" /></div>
              <div><Image centered src="https://picsum.photos/600/400?image=2" /></div>
              <div><Image centered src="https://picsum.photos/600/400?image=3" /></div>
            </Slider>
          </div>
        </GradientArea>
        <Container style={{ marginTop: '30px' }}>
          <Grid centered stackable>
            <Grid.Row centered columns={5}>
              <Grid.Column textAlign="center">
                <h1><FormattedMessage {...messages.productCanvas} /></h1>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h1><FormattedMessage {...messages.productPoster} /></h1>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h1><FormattedMessage {...messages.productSticker} /></h1>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h1><FormattedMessage {...messages.productPackaging} /></h1>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h1><FormattedMessage {...messages.productEtc} /></h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container style={{ marginTop: '20px' }}>
          <Step.Group fluid>
            <Step active>
              <Icon name="tags" />
              <Step.Content>
                <Step.Description><FormattedMessage {...messages.stepConfigureProduct} />/<br />
                  <FormattedMessage {...messages.stepCheckPriceOnline} /></Step.Description>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name="upload" />
              <Step.Content>
                <Step.Description><FormattedMessage {...messages.stepUploadYourFile} /></Step.Description>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name="payment" />
              <Step.Content>
                <Step.Description><FormattedMessage {...messages.stepMakeAPayment} /></Step.Description>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name="truck" />
              <Step.Content>
                <Step.Description><FormattedMessage {...messages.stepReceiveTheProduct} /></Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
          <Header textAlign="center" as="h1">
            <FormattedMessage {...messages.orderNow} />
          </Header>
          <DotPrintMap isMarkerShown />
        </Container>
        <Footer />
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

