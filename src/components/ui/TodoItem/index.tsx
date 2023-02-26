import './index.scss';

import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import useAppSelector from '../../../core/hooks/useAppSelector';
import { removeTodo, toggleComplete } from '../../../core/store/todos';
import { getTheme } from '../../../core/store/theme';
import { ITodo } from '../../../types/data';
import CheckBox from '../../common/CheckBox';
import SimpleButton from '../../common/SimpleButton';
import { SvgCross } from '../../common/Icons';

interface ToDoItemProps {
  todo: ITodo;
  classes?: string;
  index: number;
}

const TodoItem: React.FC<ToDoItemProps> = ({ todo, classes, index }) => {
  const theme = useAppSelector(getTheme());
  const { title, complete } = todo;
  const classList = `todo-item todo-item--${theme}${
    classes ? ' ' + classes : ''
  }`;
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={todo._id} index={index}>
      {(provided) => (
        <li
          className={classList}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CheckBox
            classes="todo-item__checkbox"
            checked={complete}
            onChangeHandler={() => dispatch(toggleComplete(todo))}
          />
          <SimpleButton
            classes={`todo-item__todo${
              complete ? ' todo-item__todo--complited' : ''
            }`}
            onClickHandler={() => dispatch(toggleComplete(todo))}
          >
            <h2 className="todo-item__title">{title}</h2>
          </SimpleButton>
          <SimpleButton
            classes="todo-item__button-cross"
            onClickHandler={() => dispatch(removeTodo(todo))}
          >
            <SvgCross classes="todo-item__icon-cross" />
          </SimpleButton>
        </li>
      )}
    </Draggable>
  );
};

export default TodoItem;
