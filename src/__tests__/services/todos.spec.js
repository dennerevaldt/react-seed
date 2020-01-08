import axios from 'axios';

import getTodoList from '~/services/todos';

jest.mock('axios');

describe('Todos service', () => {
  it('should returns a list of the todos', async () => {
    const todos = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ];
    const resp = { data: todos };
    axios.get.mockResolvedValue(resp);

    const todoList = await getTodoList();

    expect(todoList).toBeDefined();
    expect(todoList).toHaveLength(1);
  });
});
