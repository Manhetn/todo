import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';
import { ITodo } from '../../../types/data';
import SimpleButton from '../../common/SimpleButton';
import TodosCounter from '../TodosCounter';
import TodosFilter from '../TodosFilter';
import './index.scss';

// import useAppSelector from '../../../core/hooks/useAppSelector';
// import { getTheme } from '../../../core/store/theme';

interface ITodosFilterBarProps {
  currentFilter: string;
  todos: ITodo[];
  classes?: string;
  changeFilterHandler: (type: string) => void;
  removeCompletedTodosHandler: () => void;
}

const TodosFilterBar: React.FC<ITodosFilterBarProps> = ({
  currentFilter,
  todos,
  classes,
  changeFilterHandler,
  removeCompletedTodosHandler,
}) => {
  const theme = useAppSelector(getTheme());
  // const filters = ['all', 'active', 'completed'];
  // const classList = `filter-list filter-list--${theme}${
  //   classes ? ' ' + classes : ''
  // }`;

  return (
    <div className={`todos-filter-bar todos-filter-bar--${theme}`}>
      <TodosCounter todos={todos} classes="todos-filter-bar__counter" />
      <TodosFilter
        currentFilter={currentFilter}
        classes="todos-filter-bar__filter"
        changeFilterHandler={changeFilterHandler}
      />
      <SimpleButton
        classes="todos-filter-bar__clear-completed-button"
        onClickHandler={removeCompletedTodosHandler}
      >
        Clear Completed
      </SimpleButton>
    </div>
  );
};

export default TodosFilterBar;
