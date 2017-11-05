import { createSelector } from 'reselect';

const selectAdminOrder = (state) => state.get('adminOrder');

const makeSelectSelectedNewOrder = () => createSelector(
    selectAdminOrder,
    (state) => state.get('selectedNewOrder')
);

export {
    selectAdminOrder,
    makeSelectSelectedNewOrder,
};
