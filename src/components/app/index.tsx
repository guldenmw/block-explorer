import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from '../layout';
import LatestBlocks from '../../pages/latest-blocks';
import SingleBlock from '../../pages/single-block';
import ErrorPage from '../../pages/error-page';


/**
 * App component responsible for routing and rending all components
 */
function App() {
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
            <ErrorPage/>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
