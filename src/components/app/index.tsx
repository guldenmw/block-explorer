import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../../logo.svg';
import LatestBlocks from '../../pages/latest-blocks';
import SingleBlock from '../../pages/single-block';
import PageNotFound from '../../pages/page-not-found';


function Index() {
  return (
    <Router>
      <Switch>
        <Route path={'/block/:hash'}>
          <SingleBlock/>
        </Route>
        <Route exact path={'/'}>
          <LatestBlocks/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Index;
