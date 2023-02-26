import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import RootContainer from './containers/RootContainer';
import MainContainer from './containers/MainContainer';
import TodosPage from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <RootContainer>
      <Header />
      <MainContainer>
        <TodosPage />
      </MainContainer>
      <Footer />
    </RootContainer>
  );
};

export default App;
