const getNameId = (name) =>
name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');

export default getNameId