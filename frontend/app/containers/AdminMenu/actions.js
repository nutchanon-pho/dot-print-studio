import { SELECT_ADMIN_MENU } from './constants';

export function selectAdminMenu(name) {
  return {
    type: SELECT_ADMIN_MENU,
    name,
  };
}
