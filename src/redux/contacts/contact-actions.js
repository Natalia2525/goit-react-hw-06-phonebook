import types from './contact-types';
import shortid from 'shortid';

export const addContact = data => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
});
export const deleteContact = payload => ({
  type: types.DELETE,
  payload,
});

export const changeFilter = payload => ({
  type: types.CHANGE_FILTER,
  payload,
});
