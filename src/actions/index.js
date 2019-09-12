export const UPDATE_PRICE = 'UPDATE_PRICE';
export const updatePriceAC = price => {

    return {type: UPDATE_PRICE, payload: price};
};


export const BUY_ITEM = "BUY_ITEM";
export const buyitem = item => {
    return { type: BUY_ITEM, payload: item };
};

export  const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = item => {
    return { type: REMOVE_FEATURE, payload: item };
}