import { useState } from 'react';
import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';
import { INewTodo } from '../../../types/data';
import CheckBox from '../../common/CheckBox';
import EntryField from '../../common/EntryField';
import './index.scss';

interface ITodoFormProps {
  classes?: string;
  addTodoHandler: (todo: INewTodo) => void;
}

const defaultTodo = {
  title: '',
  complete: false,
};

const TodoForm: React.FC<ITodoFormProps> = ({ classes, addTodoHandler }) => {
  const theme = useAppSelector(getTheme());
  const [newTodo, setNewTodo] = useState<INewTodo>(defaultTodo);
  const classList = `todo-form todo-form--${theme}${
    classes ? ' ' + classes : ''
  }`;

  const changeTitle = (vlaue: string): void => {
    setNewTodo((prev) => ({ ...prev, title: vlaue }));
  };

  const changeComplete = (): void => {
    setNewTodo((prev) => ({ ...prev, complete: !prev.complete }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newTodo.title.trim()) {
      addTodoHandler(newTodo);
      setNewTodo(defaultTodo);
    }
  };

  return (
    <form className={classList} onSubmit={(e) => submitHandler(e)}>
      <CheckBox
        classes="todo-form__checkbox"
        checked={newTodo.complete}
        onChangeHandler={changeComplete}
      />
      <EntryField
        value={newTodo.title}
        placeholder="Create a new todo..."
        onChangeHandler={changeTitle}
      />
    </form>
  );
};

export default TodoForm;
