import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LatestBlocks from '../../pages/latest-blocks';
import SingleBlock from '../../pages/single-block';
import PageNotFound from '../../pages/page-not-found';
import Layout from '../layout';


function Index() {
  return (
    <Router>
      <Switch>
        <Route path={'/block/:blockHash'} render={(props) => (
          <Layout hideOverflow={false}>
            <SingleBlock blockHash={props?.match?.params?.blockHash}/>
          </Layout>
        )}>
        </Route>
        <Route exact path={'/'}>
          <Layout>
            <LatestBlocks/>
          </Layout>
        </Route>
        <Route path="*">
          <Layout>
            <PageNotFound/>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default Index;
