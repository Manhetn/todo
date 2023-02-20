interface IEntryFieldProps {
  value: string;
  classes?: string
  placeholder?: string;
  onChangeHandler: (value: string) => void;
}

const EntryField: React.FC<IEntryFieldProps> = ({
  value,
  classes,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <div className={classes ? classes + ' entry-field' : 'entry-field'}>
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
