import './index.scss';

import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { ITodo } from '../../../types/data';
import TodoItem from '../TodoItem';

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
  return (
    <>
      <DragDropContext onDragEnd={dragEndHandler}>
        <Droppable droppableId="droppable-todos-list">
          {(provided, snapshot) => (
            <ul
              className={
                (classes ? 'todo-list ' + classes : 'todo-list') +
                (snapshot.isDraggingOver ? ' dragactive' : '')
              }
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
