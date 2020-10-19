import ShopActionTypes from "./shop.action.types";

export const updateCollections = (collectionsMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
