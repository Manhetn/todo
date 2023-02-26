import useAppSelector from '../../../core/hooks/useAppSelector';
import { getTheme } from '../../../core/store/theme';
import './index.scss';

interface IEntryFieldProps {
  value: string;
  classes?: string;
  placeholder?: string;
  onChangeHandler: (value: string) => void;
}

const EntryField: React.FC<IEntryFieldProps> = ({
  value,
  classes,
  placeholder,
  onChangeHandler,
}) => {
  const theme = useAppSelector(getTheme());
  const classList = `entry-field entry-field--${theme}${
    classes ? ' ' + classes : ''
  }`;

  return (
    <div className={classList}>
      <input
        className="entry-field__input"
        placeholder={placeholder || ''}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default EntryField;
