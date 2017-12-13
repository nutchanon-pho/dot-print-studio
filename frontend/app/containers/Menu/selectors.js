import { createSelector } from 'reselect';

const selectMenu = (state) => state.get('menu');

const makeSelectActiveMenu = () => createSelector(
    selectMenu,
    (state) => state.get('activeMenu')
);

export {
    selectMenu,
    makeSelectActiveMenu,
};
