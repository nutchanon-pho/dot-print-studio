/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ShopPage from 'containers/ShopPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Dot Print"
        defaultTitle="Dot Print"
      >
        <meta name="description" content="Dot Print" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
