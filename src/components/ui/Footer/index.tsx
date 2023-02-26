import './index.scss';

import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';

const Footer: React.FC = () => {
  const theme = useAppSelector(getTheme());

  return (
    <footer className={`footer footer--${theme}`}>
      <div className="footer__container">
        <p className="footer__text">Drag and drop to reorder list</p>
      </div>
    </footer>
  );
};

export default Footer;
