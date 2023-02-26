import './index.scss';

interface IPrISimpleButtonProps {
  classes?: string;
  children: React.ReactNode;
  onClickHandler: () => void;
}

const SimpleButton: React.FC<IPrISimpleButtonProps> = ({
  classes,
  children,
  onClickHandler,
}) => {
  const classList = `simple-button${classes ? ' ' + classes : ''}`;

  return (
    <button className={classList} type="button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default SimpleButton;
