import './index.scss';

import useAppSelector from '../../core/hooks/useAppSelector';
import { getTheme } from '../../core/store/theme';
import { ReactNode } from 'react';

interface IRootContainerProps {
  children: ReactNode;
}

const RootContainer: React.FC<IRootContainerProps> = ({ children }) => {
  const theme = useAppSelector(getTheme());

  return (
    <div className={`root-container root-container--${theme}`}>{children}</div>
  );
};

export default RootContainer;
