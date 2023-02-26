import './index.scss';

import { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
  classes?: string;
}

const Container: React.FC<IContainerProps> = ({ children, classes }) => {
  const classList = `container ${classes ? ' ' + classes : ''}`;

  return <div className={classList}>{children}</div>;
};

export default Container;
