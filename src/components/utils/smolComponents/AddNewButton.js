import plusIcon from '../../../assets/plus.svg';
import '../../../styles/header.css';

const AddNewButton = (props) => {
  return (
    <button
      className={props.getAddIconStatusHandler()}
      onClick={props.toggleFormDisplayStatusHandler}
      type='button'
    >
      <img src={plusIcon} alt="plus icon" className="plusIcon" />
      <p className="addNewText">Add New</p>
    </button>
  );
};

export default AddNewButton;
