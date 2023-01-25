import trashIcon from '../../assets/delete.svg';

const DeleteButton = (props) => {
  return (
    <button
      className={props.trash ? 'trashIcon' : 'hidden'}
      onClick={() => props.deleteCategory(props.id)}
    >
      <img src={trashIcon} alt="Trash Icon" />
    </button>
  );
};

export default DeleteButton;
