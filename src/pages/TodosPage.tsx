import TodoForm from '../components/ui/TodoForm/TodoForm';
import TodoList from '../components/ui/TodoList/TodoList';

const TodosPage: React.FC = () => {
  return (
    <section className="todos">
      <TodoForm />
      <TodoList />
    </section>
  );
};

export default TodosPage;
