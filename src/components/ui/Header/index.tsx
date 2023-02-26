import './index.scss';

import useAppSelector from '../../../core/hooks/useAppSelector';
import useAppDispatch from '../../../core/hooks/useAppDispatch';
import { changeTheme, getTheme } from '../../../core/store/theme';

import Container from '../../../containers/Container';
import SimpleButton from '../../common/SimpleButton';
import { SvgMoon, SvgSun } from '../../common/Icons';

const Header: React.FC = () => {
  const theme = useAppSelector(getTheme());
  const dispatch = useAppDispatch();

  return (
    <header className={`header header--${theme}`}>
      <Container classes="header__container">
        <h1 className="header__logo">TODO</h1>
        <SimpleButton
          classes="header__button-toggle-theme"
          onClickHandler={() => dispatch(changeTheme())}
        >
          {theme === 'dark' ? <SvgSun /> : <SvgMoon />}
        </SimpleButton>
      </Container>
    </header>
  );
};

export default Header;
