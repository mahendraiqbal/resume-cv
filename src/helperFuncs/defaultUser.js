import uniqid from 'uniqid';

const defaultUser = {
  name: 'John Watters',
  phone: '(954) 494 - 9167',
  email: 'jack.watters@me.com',
  linkedin: 'https://www.linkedin.com/in/john-watters/',
  categories: [
    {
      name: 'Skills',
      contents: 'React, NodeJs, Typescript, Next.js ,Figma',
      id: uniqid(),
      trash: false,
    },
    {
      name: 'Languages',
      contents: 'Spanish (conversational) & English (Native)',
      id: uniqid(),
      trash: false,
    },
    {
      name: 'Interests',
      contents: 'Hockey, Country Music, Car Camping, Skiing, Backpacking',
      id: uniqid(),
      trash: false,
    },
  ],
};

export default defaultUser;
