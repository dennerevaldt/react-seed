import api from '~/config/api';

const getTodoList = async () => {
  try {
    const { data } = await api.get('/todos');
    return data;
  } catch (error) {
    return error;
  }
};

export default getTodoList;
