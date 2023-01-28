import { useState } from 'react';

const useNestedFormState = (initial) => {
  const [value, setValue] = useState(initial);

  const handleDelete = (id) => setValue(value.filter((el) => el.id !== id));

  const handleChange = (e, id) => {
    const index = value.findIndex((el) => el.id === id);
    const element = { ...value[index] };

    element[e.target.name] = e.target.value;

    const start = value.slice(0, index);
    const end = value.slice(index + 1);
    const newArray = [...start, element, ...end];

    setValue(newArray);
  };

  const handleToggleOn = (id) => {
    const index = value.findIndex((el) => el.id === id);

    const element = { ...value[index] };
    element.trash = true;

    const start = value.slice(0, index);
    start.forEach((el) => (el.trash = false));

    const end = value.slice(index + 1);
    end.forEach((el) => (el.trash = false));

    const newArray = [...start, element, ...end];

    setValue(newArray);
  };

  const handleToggleOff = (id) => {
    const index = value.findIndex((el) => el.id === id);
    const element = { ...value[index] };
    element.trash = false;

    const start = value.slice(0, index);
    const end = value.slice(index + 1);
    const newArray = [...start, element, ...end];

    setValue(newArray);
  };

  return [
    value,
    setValue,
    handleDelete,
    handleChange,
    handleToggleOn,
    handleToggleOff,
  ];
};

export default useNestedFormState;
