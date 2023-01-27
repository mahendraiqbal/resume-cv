import { useState } from 'react';

const useNestedFormState = (initial) => {
  const [value, setValue] = useState(initial);

  const handleDelete = (id) => setValue(value.filter((el) => el.id !== id));

  const handleChange = (e, id) => {
    const index = value.findIndex((el) => el.id === id);
    const element = { ...value[index] };

    // if (e.target.name.includes('.')) {
    //   const [name, nestedName] = e.target.name.split('.');
    //   element[name][nestedName] = e.target.value;
    // }
    //  else element[e.target.name] = e.target.value;

    element[e.target.name] = e.target.value;

    const start = value.slice(0, index);
    const end = value.slice(index + 1);
    const newArray = [...start, element, ...end];

    setValue(newArray);
  };

  const handleToggleIcon = (id) => {
    const index = value.findIndex((el) => el.id === id);
    const element = { ...value[index] };

    element.trash = !element.trash;

    const start = value.slice(0, index);
    const end = value.slice(index + 1);
    const newArray = [...start, element, ...end];

    setValue(newArray);
  };

  return [value, setValue, handleDelete, handleChange, handleToggleIcon];
};

export default useNestedFormState;
