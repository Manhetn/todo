import './index.scss';

import { ITodo } from '../../../types/data';

interface ITodosCounterProps {
  todos: ITodo[];
  classes?: string;
}

const TodosCounter: React.FC<ITodosCounterProps> = ({ todos, classes }) => {
  const countunCompletedTodos = (): number => {
    const unCompletedTodos: ITodo[] = todos.filter(
      (todo) => todo.complete === false
    );
    return unCompletedTodos.length;
  };

  const count = countunCompletedTodos();

  return (
    <span className={classes ? 'todos-counter ' + classes : 'todos-counter'}>
      <i className="todos-counter__count">{count}</i>{' '}
      {count === 1 ? 'item left' : 'items left'}
    </span>
  );
};

export default TodosCounter;
