import { useState } from 'react';

const useNestedFormState = (initial) => {
  const [value, setValue] = useState(initial);

  const handleDelete = (id) => setValue(value.filter((el) => el.id !== id));

  const handleChange = (e, id, target) => {
    const index = value.findIndex((el) => el.id === id);
    const element = { ...value[index] };

    element[target] = e.target.value;

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
