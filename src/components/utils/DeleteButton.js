import trashIcon from '../../assets/delete.svg';
import '../../styles/header.css';

const DeleteButton = (props) => {
  const trashClass = props.trash ? 'trashIcon' : 'hidden';
  return (
    <button className={trashClass} onClick={() => props.delete(props.id)}>
      <img src={trashIcon} alt="Trash Icon" />
    </button>
  );
};

export default DeleteButton;
