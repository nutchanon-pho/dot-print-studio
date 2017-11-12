/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Menu from 'containers/Menu';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';

const GradientArea = styled.div`
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#d2cdc7+0,eae6e5+100 */
  background: #d2cdc7; /* Old browsers */
  background: -moz-linear-gradient(top,  #d2cdc7 0%, #eae6e5 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #d2cdc7 0%,#eae6e5 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #d2cdc7 0%,#eae6e5 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2cdc7', endColorstr='#eae6e5',GradientType=0 ); /* IE6-9 */
  height: 630px;
`;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10%' }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10%' }}
      onClick={onClick}
    ></div>
  );
};

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

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <GradientArea>
          <Menu />
          <div style={{ marginTop: '100px', height: '600px', maxHeight: '600px' }}>
            <Slider {...settings} >
              <div><Image centered src="https://picsum.photos/600/400?image=0" /></div>
              <div><Image centered src="https://picsum.photos/600/400?image=1" /></div>
              <div><Image centered src="https://picsum.photos/600/400?image=2" /></div>
              <div><Image centered src="https://picsum.photos/600/400?image=3" /></div>
            </Slider>
          </div>
        </GradientArea>
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

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
