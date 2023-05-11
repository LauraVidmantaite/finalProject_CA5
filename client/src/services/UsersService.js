import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api/users',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAll = async () => {
  const response = await api.get('/');

  return response.data;
};

const create = async (body) => {
  const response = await api.post('/', body);

  return response.data;
};

const update = async (body, id) => {
  const response = await api.put('/' + id, body);

  return response.data;
};

const remove = async (id) => {
  const response = await api.delete('/' + id);

  return response.data;
};

const UsersService = {
  getAll,
  create,
  update,
  remove,
};

export default UsersService;
