import { SELECT_MENU } from './constants';

export function selectMenu(name) {
  return {
    type: SELECT_MENU,
    name,
  };
}
