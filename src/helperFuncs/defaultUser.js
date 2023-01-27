import uniqid from 'uniqid';

const defaultUser = {
  name: 'John Watters',
  phone: '(954) 494 - 9167',
  email: 'jack.watters@me.com',
  linkedin: 'https://www.linkedin.com/in/john-watters/',
  schools: [
    {
      institution: 'University of Southern California',
      college: 'Marshall School of Business',
      dates: 'August 2018–May 2022',
      degrees:
        'Bachelor of Science in Business Administration, Specialization in Computer Programming',
      courses:
        'Operations Management, Database Management, Programing in Python',
      activities:
        "Sports Business Association, Men's Lacrosse Team, Pi Kappa Alpha Fraternity",
      id: uniqid(),
      trash: false,
    },
  ],
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
  jobs: [
    {
      title: 'CEO',
      company: 'Notion',
      dates: 'August 2018–May 2022',
      responsibility: { id: uniqid(), text: '' },
      responsibilities: [
        {
          id: uniqid(),
          text: "Developed a comprehensive 'CRM' to manage customer,course, and employee data in Notion using a series of relational databases combined with a no-code automation software (Make).",
        },
        {
          id: uniqid(),
          text: 'Headed the transition to a new learning management system and website. Includes redevelopment of course and website content as well as the introduction of new integrations with Stripe.',
        },
        {
          id: uniqid(),
          text: 'Collaborated with management and edu teams to ensure client and instructor satisfaction during trial periods with potential LAW (Language At Work) Clients.',
        },
      ],
      id: uniqid(),
      trash: false,
    },
  ],
};

export default defaultUser;
