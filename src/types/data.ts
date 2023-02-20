export interface INewTodo {
  title: string;
  complete: boolean;
}

export interface ITodo extends INewTodo {
  _id: string;
}