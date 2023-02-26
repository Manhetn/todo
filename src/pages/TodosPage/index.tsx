import './index.scss';

import { DropResult } from 'react-beautiful-dnd';
import useAppSelector from '../../core/hooks/useAppSelector';
import useAppDispatch from '../../core/hooks/useAppDispatch';
import { addTodo, getTodoes, updateTodoesList } from '../../core/store/todos';
import { reorder } from '../../core/utils/beautifulDndHalpers';

import TodoForm from '../../components/ui/TodoForm';
import TodoList from '../../components/ui/TodoList';
// import SimpleButton from '../../components/common/SimpleButton';
// import TodosFilter from '../../components/ui/TodosFilter';
// import TodosCounter from '../../components/ui/TodosCounter';
import { useState } from 'react';
import { ITodo } from '../../types/data';
import { getTheme } from '../../core/store/theme';
import Container from '../../containers/Container';
import TodosFilterBar from '../../components/ui/TodosFilterBar';

const TodosPage: React.FC = () => {
  const theme = useAppSelector(getTheme());
  const todos = useAppSelector(getTodoes());
  const [filter, setFilter] = useState('all');
  const dispatch = useAppDispatch();

  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newTodosList = reorder(
      todos,
      result.source.index,
      result.destination.index
    );

    dispatch(updateTodoesList(newTodosList));
  };

  const removeCompletedTodos = () => {
    const newTodosList = [...todos].filter((todo) => !todo.complete);
    dispatch(updateTodoesList(newTodosList));
  };

  const filterTodos = (): ITodo[] => {
    let filteredTodoes: ITodo[] = [];
    if (filter === 'active') {
      filteredTodoes = todos.filter((todo) => !todo.complete);
    }
    if (filter === 'completed') {
      filteredTodoes = todos.filter((todo) => todo.complete);
    }
    if (filter === 'all') {
      filteredTodoes = [...todos];
    }
    return filteredTodoes;
  };

  return (
    <section className={`todos todos--${theme}`}>
      <Container classes="todos__container">
        <TodoForm
          classes="todos__form"
          addTodoHandler={(newTodo) => dispatch(addTodo(newTodo))}
        />
        <TodoList
          todos={filterTodos()}
          classes="todos__list"
          dragEndHandler={dragEndHandler}
        />
        <TodosFilterBar
          todos={todos}
          currentFilter={filter}
          classes="todos__filter-bar"
          changeFilterHandler={setFilter}
          removeCompletedTodosHandler={removeCompletedTodos}
        />
      </Container>
    </section>
  );
};

export default TodosPage;
