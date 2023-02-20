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
  return (
    <div className={classes ? classes + ' check-box' : 'check-box'}>
      <input
        className="check-box__input"
        type="checkbox"
        checked={checked}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default CheckBox;
