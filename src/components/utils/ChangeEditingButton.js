import '../../styles/header.css';

const changeEditingButton = (props) => {
  return (
    <label
      className={props.getEditIconStatusHandler()}
      htmlFor={props.htmlFor} // this should be prop?
      onClick={props.toggleEditHandler}
    >
      <img src={props.getEditIconSrcHandler()} alt="Toggle Edit/Preview" />
    </label>
  );
};

export default changeEditingButton;
