import { createSelector } from 'reselect';

const selectAdminOrder = (state) => state.get('adminOrder');

const makeSelectSelectedNewOrder = () => createSelector(
    selectAdminOrder,
    (state) => state.get('selectedNewOrder')
);

const makeSelectWorkingList = () => createSelector(
    selectAdminOrder,
    (state) => state.get('workingList')
);

const makeSelectNewOrderList = () => createSelector(
    selectAdminOrder,
    (state) => state.get('newOrderList')
);


export {
    selectAdminOrder,
    makeSelectSelectedNewOrder,
    makeSelectWorkingList,
    makeSelectNewOrderList,
};
