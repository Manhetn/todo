import { useState } from 'react';

import useAppDispatch from '../../../core/hooks/useAppDispatch';
import { addTodo } from '../../../core/store/todos';
import CheckBox from '../../common/CheckBox/CheckBox';
import EntryField from '../../common/EntryField/EntryField';
import { INewTodo } from '../../../types/data';

const defaultTodo = {
  title: '',
  complete: false,
};

const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState<INewTodo>(defaultTodo);
  const dispatch = useAppDispatch();

  const changeTitle = (vlaue: string): void => {
    setNewTodo((prev) => ({ ...prev, title: vlaue }));
  };

  const changeComplete = (): void => {
    setNewTodo((prev) => ({ ...prev, complete: !prev.complete }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newTodo.title.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo(defaultTodo);
    }
  };

  return (
    <form className="todo-form" onSubmit={(e) => submitHandler(e)}>
      <CheckBox checked={newTodo.complete} onChangeHandler={changeComplete} />
      <EntryField value={newTodo.title} onChangeHandler={changeTitle} />
    </form>
  );
};

export default TodoForm;
