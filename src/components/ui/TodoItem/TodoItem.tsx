import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../../../core/store/todos';
import { ITodo } from '../../../types/data';
import CheckBox from '../../common/CheckBox/CheckBox';

interface ToDoItemProps {
  todo: ITodo;
  classes?: string;
}

const TodoItem: React.FC<ToDoItemProps> = ({ todo, classes }) => {
  const { title, complete } = todo;
  const dispatch = useDispatch();

  return (
    <li className={classes ? classes + ' todo-item' : 'todo-item'}>
      <CheckBox
        checked={complete}
        onChangeHandler={() => dispatch(toggleComplete(todo))}
      />
      <h2 className="todo-item__title">{title}</h2>
      <button
        className="todo-item__button-cross"
        type="button"
        onClick={() => dispatch(removeTodo(todo))}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
