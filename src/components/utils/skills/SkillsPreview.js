import React from 'react';
import '../../../styles/skills.css';
import trashIcon from '../../../assets/delete.svg';

export default function SkillsPreview(props) {
  const { categories } = props;
  return (
    <div className="skillsContent">
      {categories.map((category) => {
        const { name, id, contents, trash } = category;
        const nameId = props.getNameId(name);
        return (
          category.contents && (
            <div
              key={id}
              id={nameId}
              className="categoryRow"
              onMouseEnter={() => props.showTrashIcon(id)}
              onMouseLeave={() => props.hideTrashIcon(id)}
            >
              <div>
                {name}: {contents}
              </div>
              <button
                className={trash ? 'trashIcon' : 'hidden'}
                onClick={() => props.deleteCategory(id)}
              >
                <img src={trashIcon} alt="Trash Icon" />
              </button>
            </div>
          )
        );
      })}
    </div>
  );
}
