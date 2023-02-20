import Header from './components/ui/Header/Header';
import TodosPage from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <div className="root">
      <Header />
      <TodosPage />
    </div>
  );
};

export default App;
