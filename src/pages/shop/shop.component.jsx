import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  // fetching the shop collections from firestore
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   this.props.updateCollectionsInRedux(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // Above code can be also written with promise as below
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollectionsInRedux(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    // this.unsubscribeFromSnapshot.c;
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {
          // this is the default path i.e. /shop
          //accessed from match prop which got passed by the Route in the app component
        }
        {
          // <Route exact path={`${match.path}`} component={CollectionsOverview} />
          // to pass the state value to a component in route, we use render
        }
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        {
          // the below route is a dynamic route, which is /shop/:collection,
          // where collection can be any of hat, jacket,etc.
          // :collection is a path param that we can access in the Category component
        }
        {
          //<Route
          //   exact
          //   path={`${match.path}/:collection`}
          //   component={CollectionPage}
          // />
        }
        <Route
          exact
          path={`${match.path}/:collection`}
          render={(props) => (
            <CollectionPagewWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollectionsInRedux: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
