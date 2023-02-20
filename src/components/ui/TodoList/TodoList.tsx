import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTodoes } from '../../../core/store/todos';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const todos = useAppSelector(getTodoes());

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem todo={todo} classes="todo-list__item" key={todo._id} />
        );
      })}
    </ul>
  );
};

export default TodoList;
