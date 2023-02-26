import { ReactNode } from 'react';
import './index.scss';

interface IContainerProps {
  children: ReactNode;
  classes?: string;
}

const Container: React.FC<IContainerProps> = ({ children, classes }) => {
  const classList = `container ${classes ? ' ' + classes : ''}`;

  return <div className={classList}>{children}</div>;
};

export default Container;
