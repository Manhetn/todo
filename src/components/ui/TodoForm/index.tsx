import './index.scss';

import { useState } from 'react';

import { INewTodo } from '../../../types/data';
import CheckBox from '../../common/CheckBox';
import EntryField from '../../common/EntryField';

interface ITodoFormProps {
  classes?: string;
  addTodoHandler: (todo: INewTodo) => void;
}

const defaultTodo = {
  title: '',
  complete: false,
};

const TodoForm: React.FC<ITodoFormProps> = ({ classes, addTodoHandler }) => {
  const [newTodo, setNewTodo] = useState<INewTodo>(defaultTodo);
  const classList = `todo-form${classes ? ' ' + classes : ''}`;

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
      <EntryField value={newTodo.title} onChangeHandler={changeTitle} />
    </form>
  );
};

export default TodoForm;
