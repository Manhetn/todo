import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';
import { SvgCheck } from '../Icons';
import './index.scss';

interface ICheckBoxProps {
  checked: boolean;
  classes?: string;
  onChangeHandler: () => void;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  checked,
  classes,
  onChangeHandler,
}) => {
  const theme = useAppSelector(getTheme());
  const classList = `check-box check-box--${theme}${
    classes ? ' ' + classes : ''
  }`;

  return (
    <div className={classList}>
      <label
        className={`check-box__checkbox${
          checked ? ' check-box__checkbox--checked' : ''
        }`}
      >
        <input
          className="check-box__input"
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
        ></input>
        {!checked || <SvgCheck classes="check-box__icon-check" />}
      </label>
    </div>
  );
};

export default CheckBox;
