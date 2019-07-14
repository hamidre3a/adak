
import { store } from 'redux/configureStore';

import { createUser, getUser, getUsers, updateUser, removeUser, login } from './users';


const config = {
  base_url: "http://localhost:5000/api",
  default_params: () => (store.getState().user.accessToken
    ? { headers: { Authorization: "Bearer " + store.getState().user.accessToken } }
    : {}),
  default_then: resolve => response => resolve(response.data),
  default_catch: resolve => _ => resolve({ success: false, text: 'خطا در ارتباط با سرور' }),
};

const API = {
  users: {
    create: createUser(config),
    get: getUser(config),
    getAll: getUsers(config),
    update: updateUser(config),
    remove: removeUser(config),
    login: login(config),
  },
};

export default API;
