import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// converting the collections to array for preview page
// Object.keys would make an array of all the keys in collections map
// and then we run the array.map function on this keys array and
// pull out the valus of those keys and return a new array
// since we have removed the initial state (Static) from reducer, so the
// selectCollections would now return null and hence we need to handle it
// and here we handled it by returning a empty array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// since we have removed the initial state (Static) from reducer, so the
// selectCollections would now return null and hence we need to handle it
// and here we handled it by returning a null
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
