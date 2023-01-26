import { useState } from 'react';

const useToggleStatus = (initial) => {
  const [value, setValue] = useState(initial);
  const toggleHandler = () => setValue(!value);

  return [value, toggleHandler];
};

export default useToggleStatus;
