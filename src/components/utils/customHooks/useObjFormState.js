import { useState } from 'react';

const useObjFormState = (initial) => {
  const [value, setValue] = useState(initial);

  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  const handleSubmitForm = (e, handleDisplayFunc, setValuesFunc, values) => {
    if (!e.target.value) return;
    e.preventDefault();
    handleDisplayFunc();
    setValuesFunc(values.concat(value));
    setValue(initial);
  };

  return [value, handleChange, handleSubmitForm, setValue];
};

export default useObjFormState;
