import uniqid from 'uniqid';

const emptyFormData = {
  category: { name: '', contents: '', id: uniqid(), trash: false },
  school: {
    institution: '',
    college: '',
    dates: '',
    degrees: '',
    courses: '',
    activities: '',
    id: uniqid(),
    trash: false,
  },
  job: {
    title: '',
    company: '',
    dates: '',
    responsibility: { id: uniqid(), text: '' },
    responsibilities: [],
    id: uniqid(),
    trash: false,
  },
  responsibility: { id: uniqid(), text: '' },
};

export default emptyFormData;
