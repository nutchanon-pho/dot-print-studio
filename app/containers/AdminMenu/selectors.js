import { createSelector } from 'reselect';

const selectAdminMenu = (state) => state.get('adminMenu');

const makeSelectActiveAdminMenu = () => createSelector(
    selectAdminMenu,
    (state) => state.get('activeAdminMenu')
);

export {
    selectAdminMenu,
    makeSelectActiveAdminMenu,
};
