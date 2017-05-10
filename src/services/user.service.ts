import { callApi } from './service.utils';

export const userService = {
  fetchUsers: () => callApi('/users')
};
