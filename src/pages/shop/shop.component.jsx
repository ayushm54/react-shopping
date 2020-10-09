import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    {
      // this is the default path i.e. /shop
      //accessed from match prop which got passed by the Route in the app component
    }
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {
      // the below route is a dynamic route, which is /shop/:collection,
      // where collection can be any of hat, jacket,etc.
      // :collection is a path param that we can access in the Category component
    }
    <Route
      exact
      path={`${match.path}/:collection`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
