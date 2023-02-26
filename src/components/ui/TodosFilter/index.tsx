import './index.scss';

import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';

interface ITodosFilterProps {
  currentFilter: string;
  classes?: string;
  changeFilterHandler: (type: string) => void;
}

const TodosFilter: React.FC<ITodosFilterProps> = ({
  currentFilter,
  classes,
  changeFilterHandler,
}) => {
  const theme = useAppSelector(getTheme());
  const filters = ['all', 'active', 'completed'];
  const classList = `filter-list filter-list--${theme}${
    classes ? ' ' + classes : ''
  }`;

  return (
    <ul className={classList}>
      {filters.map((filter, index) => {
        return (
          <li
            key={filter + '-' + index}
            className={
              'filter-list__item' +
              (currentFilter === filter ? ' filter-list__item--active' : '')
            }
            onClick={() => changeFilterHandler(filter)}
          >
            {filter[0].toUpperCase() + filter.slice(1)}
          </li>
        );
      })}
    </ul>
  );
};

export default TodosFilter;
