import { ReactNode } from 'react';
import './index.scss';

interface IMainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
  return <main className="main-container">{children}</main>;
};

export default MainContainer;
