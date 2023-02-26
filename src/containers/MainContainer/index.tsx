import './index.scss';

import { ReactNode } from 'react';

interface IMainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
  return <main className="main-container">{children}</main>;
};

export default MainContainer;
