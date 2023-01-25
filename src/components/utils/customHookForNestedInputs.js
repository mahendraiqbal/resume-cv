const meep = (e, id, arr) => {

  const index = arr.findIndex((el) => el.el === id);
  const element = { ...arr[index] };
  element[e.target.name] = e.target.value;

  const start = arr.slice(0, index);
  const end = arr.slice(index + 1);
  const newArray = [...start, element, ...end];

  // setCategories(newArray);
};

export default meep;
