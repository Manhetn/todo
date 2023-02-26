import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';
import { ITodo } from '../../../types/data';
import TodoItem from '../TodoItem';
import './index.scss';

interface ITodoListProps {
  todos: ITodo[];
  classes?: string;
  dragEndHandler: (result: DropResult) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  classes,
  dragEndHandler,
}) => {
  const theme = useAppSelector(getTheme());
  const classList = `todo-list todo-list--${theme}${
    classes ? ' ' + classes : ''
  }`;

  if (!todos.length) {
    const newClassList = `${classList} todo-list--empty`;

    return (
      <div className={newClassList}>
        <p className="todo-list__empty-text">Here will be your todos</p>
      </div>
    );
  }

  return (
    <>
      <DragDropContext onDragEnd={dragEndHandler}>
        <Droppable droppableId="droppable-todos-list">
          {(provided) => (
            <ul
              className={classList}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <>
                {todos.map((todo, index) => {
                  return (
                    <TodoItem
                      key={todo._id}
                      classes="todo-list__item"
                      todo={todo}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TodoList;
