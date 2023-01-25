import AddNewButton from './AddNewButton';
import ChangeEditingButton from './ChangeEditingButton';
import previewIcon from '../../assets/checkbox-marked.svg';
import editIcon from '../../assets/account-edit.svg';
import '../../styles/header.css';

const Header = (props) => {
  const getEditIconStatusHandler = () =>
    !props.hoverStatus && !props.editing ? 'hidden' : 'editLabel';

  const getAddIconStatusHandler = () =>
    props.hoverStatus && props.editing ? 'addNewButton' : 'hidden';

  const getEditIconSrcHandler = () => (props.editing ? previewIcon : editIcon);

  return (
    <header className="header">
      <div className="sectionName">{props.name}</div>
      <AddNewButton
        getAddIconStatusHandler={getAddIconStatusHandler}
        toggleFormDisplayStatusHandler={props.toggleFormDisplayStatusHandler}
      />
      <ChangeEditingButton
        getEditIconSrcHandler={getEditIconSrcHandler}
        getEditIconStatusHandler={getEditIconStatusHandler}
        toggleEditHandler={props.toggleEditHandler}
        htmlFor={props.formId} // TODO
      />
      <hr />
    </header>
  );
};

export default Header;
