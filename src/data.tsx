interface SubWorkItem {
  title: string;
  paragraph?: string;
  img: string;
  link?: string;
  type?: string; 
}

interface SubWork {
  [key: string]: SubWorkItem[];
}

export const toolData = [
  {
    name: 'Adobe Indesign',
    image: '/images/adobe.png',
    colImage: '/images/id.png',
    noOfYears: '3',
    stars: 4,
  },
  {
    name: 'Adobe Photoshop',
    image: '/images/photoshop.png',
    colImage: '/images/ps.png',
    noOfYears: '4',
    stars: 4,
  },
  {
    name: 'Adobe Illustrator',
    image: '/images/illustrator.png',
    colImage: '/images/ai.png',
    noOfYears: '4',
    stars: 4,
  },
  {
    name: 'Figma',
    image: '/images/figma.png',
    colImage: '/images/figmacol.png',
    noOfYears: '4',
    stars: 4,
  },
  {
    name: 'Adobe After Effects',
    image: '/images/after.png',
    colImage: '/images/aftercol.png',
    noOfYears: '2',
    stars: 3,
  },
  {
    name: 'Procreate',
    image: '/images/procreate.png',
    colImage: '/images/procreate.png',
    noOfYears: '1',
    stars: 4,
  },
  {
    name: 'Blendr',
    image: '/images/blendr.png',
    colImage: '/images/blendrcol.png',
    noOfYears: '1',
    stars: 3,
  },
];

export const selectedWorkData = [
  {
    type: 'App Redesign 2024 ',
    name: 'Pouchii Redesign',
    imgSrc: '/images/pouchii.png',
    link: 'https://www.behance.net/gallery/188111073/Pouchii-Redesign',
  },
  {
    type: 'COVERLY 2021',
    name: 'Cover Letter Generator',
    imgSrc: '/images/coverly.png',
    link: 'https://www.behance.net/gallery/170646061/Cover-Letter-generator-Case-Study',
  },
  {
    type: 'ART COLLECTION 2023',
    name: 'God’s Eye',
    imgSrc: '/images/hand.png',
    link: 'https://www.behance.net/gallery/185031767/Gods-Eye',
  },
];

export const galleryImages = [
  {
    hover: '/images/full-flower.jpeg',
    imageSrc: '/images/flowers.jpeg',
    title: 'Soulful Sunflower',
    month: 'August',
    year: '2022',
  },
  {
    hover: '/images/full-kidda.jpeg',
    imageSrc: '/images/kidda.jpeg',
    title: 'Kida Kudzz',
    month: 'August',
    year: '2022',
  },
  {
    hover: '/images/full-red.jpeg',
    imageSrc: '/images/red.jpeg',
    title: 'Red (Action FIgure)',
    month: 'August',
    year: '2022',
  },
  {
    hover: '/images/full-bloom.png',
    imageSrc: '/images/bloom.png',
    title: 'Bloom EOTP',
    month: 'August',
    year: '2022',
  },
  {
    hover: '/images/full-fat.jpeg',
    imageSrc: '/images/fat.jpeg',
    title: 'Fat Mando',
    month: 'August',
    year: '2022',
  },
];

export const articleData = [
  {
    name: 'DESIGN',
    topic: 'The Rule of Third; Success stories all together',
    url: 'https://medium.com/@quadmor009/the-rules-of-third-when-chasing-a-goal-897b87778eb3',
    paragraph:
      'Have you ever felt disappointed in yourself or given up on a goal because you thought you were “falling off track” or not progressing as you would have liked to? ',
  },
  {
    name: 'DESIGN',
    topic: 'Beyond Design: The Strategic Redesign of Pouchii App',
    url: '',
    paragraph:
      'Excited to share this piece on the strategic re-design journey of Pouchii App, highlighting how innovative design thinking has transformed user experience... ',
  },
  {
    name: 'DESIGN',
    topic: 'Finding Empathy To Inspire Your Design Thinking',
    url: 'https://medium.com/@quadmor009/finding-empathy-to-inspire-your-design-thinking-541cda74e985',
    paragraph:
      'The ability to relate to the feelings of others is a superpower that can help any individual prosper, not just in design but in life as a whole. The idea of empathy in... ',
  },
  {
    name: 'DESIGN',
    topic: 'Design Tips for Non-Designers',
    url: 'https://medium.com/@quadmor009/design-tips-for-non-designers-46fb04d1cef4',
    paragraph:
      'Everyone is a designer, that much is true. However, not everyone is a qualified designer, and not all of us are visual designers. Whatever the case, you might... ',
  },
  {
    name: 'DESIGN',
    topic: 'Elastic Thinking for Creative Problem Solving',
    url: 'https://medium.com/@quadmor009/elastic-thinking-for-creative-problem-solving-e9568342d3f9',
    paragraph:
      'Elastic thinking is a cognitive approach that enables individuals to take a counterintuitive approach to creative problem-solving...  ',
  },
  {
    name: 'DESIGN',
    topic: 'Valuable Qualities of a Mobile Design Tester',
    url: 'https://medium.com/@quadmor009/valuable-qualities-of-a-mobile-design-tester-9b86e456dd57',
    paragraph:
      'Over the past few weeks, I’ve had the privilege of collaborating with a remarkable Software Quality Assurance Engineer who specializes in testing the design of a mobile... ',
  },
  {
    name: 'DESIGN',
    topic: 'God’s Eye — Stories about Success Stories',
    url: 'https://medium.com/@quadmor009/gods-eye-stories-about-success-stories-a4653087e2b4',
    paragraph:
      'Success stories are truly inspirational. We all aspire to achieve success in various facets of life... ',
  },
];

export const caseStudyData = [
  {
    type: 'App Redesign 2024 ',
    name: 'Pouchii Redesign',
    imgSrc: '/images/pochi-bg.svg',
    url: 'https://www.behance.net/gallery/188111073/Pouchii-Redesign',
  },
  {
    type: 'COVERLY 2021',
    name: 'COVERLY - A Cover Letter Generator',
    imgSrc: '/images/coverly-bg.svg',
    url: 'https://www.behance.net/gallery/170646061/Cover-Letter-generator-Case-Study',
  },
  {
    type: 'Administrative Dashboard Redesign',
    name: 'Administrative Dashboard Redesign',
    imgSrc: '/images/add.svg',
  },
  {
    type: 'Fundraising Website Redesign',
    name: 'Fundraising Website Redesign',
    imgSrc: '/images/coming-soon.svg',
  },
];

export const worksData = [
  {
    url: 'works/UI%20%2F%20UX%20Design',
    img: '/images/graphics.svg',
    title: 'UI/UX Design',
  },
  {
    url: 'works/Graphics Design',
    img: '/images/ui.svg',
    title: 'Graphics Design',
  },
  {
    url: 'works/Brand Design',
    img: '/images/brand.svg',
    title: 'Brand Design',
  },
  {
    url: 'works/Illustration',
    img: '/images/graphics.svg',
    title: 'Illustrations',
  },
];
export const subWork: SubWork = {
  'Graphics Design': [
    {
      title: 'TWISCO Out of Home Ads',
      paragraph:
        'The campaign theme for this project was “Power your Dreams”, and the designs where created to resonate the copies associated with them, while still emphasizing on the theme that parent can help their children power their dream.',
      img: '/images/twisco.png',
      link: 'https://drive.google.com/file/d/1WtuOn7CySIaIxyo8tKIEQ1oESmuy-4kg/view?usp=sharing',
    },
    {
      title: 'PRAMIE GENT SALON',
      paragraph:
        'I served as the Art Director for Pramie Gent Salon during which I provided visual guide & direction that expressed the luxurious identity of the brand. I provided multiple  marketing designs, brand asset & messaging strategies for the brand. Here are a few...',
      img: '/images/praime.png',
      link: 'https://drive.google.com/file/d/1TRzeHMKpf1FabZiILpmUozCiHmeTEcL5/view?usp=sharing',
    },
    {
      title: 'NEW AGE Out of Home Ads',
      paragraph:
        'New Age known for providing Phone Chargers and Ear Accessories came to us with the goal of helping them introduce their new EarPod Products to the market. The designs and copy focused on highlighting the features of the product, and the kind of experience that comes with using them.',
      img: '/images/new_age.png',
      link: 'https://drive.google.com/file/d/1OdpCS8WDFr_F8CeW3h8qMwLOhfjr2K2L/view?usp=sharing',
    },
    {
      title: 'CHAMDOR WINE  ',
      paragraph:
        'Chamdor wine wanted remind their audience about how inclusive they are, and how their product fits perfectly for more than one celebratory Occassion. These designs were made to go with “love” events happening in the first quarter of the year. ',
      img: '/images/chamdor.png',
      link: 'https://drive.google.com/file/d/1q9o7XNc3a-aTvbIOuGjnTJTKHvsvQ0T4/view?usp=sharing',
    },
    {
      title: 'JINJER & MANGO SOCIAL DESIGN',
      paragraph:
        'These are social media designs for an imaginary fintech brand. ',
      img: '/images/jinjer.png',
      link: 'https://drive.google.com/file/d/1DztRKkmEBAds1ykT0ePJz0EKgFFRQnC1/view?usp=sharing',
    },
    {
      title: '1940 BEER LAGER',
      paragraph:
        'These are marketing materials for a psedo beer brand. The Product and Packaging was created by a friend, after which I worked on these marketing designs. The scenes used were from the movies; “The harder they fall” and “Django Unchained”',
      img: '/images/lager.png',
      link: 'https://www.behance.net/gallery/136876875/1940-Premium-Lager',
    },
  ],
  'UI / UX Design': [
    {
      type: 'App Redesign 2024 ',
      title: 'Pouchii Redesign',
      img: '/images/pochi-bg.svg',
      paragraph: '',
    },
    {
      type: 'COVERLY 2021',
      title: 'Cover Letter Generator',
      img: '/images/coverly-bg.svg',
      link: '',
    },
    {
      type: 'Administrative Dashboard Redesign',
      title: 'Cover Letter Generator',
      img: '/images/add.svg',
      link: '',
    },
    {
      type: 'Fundraising Website Redesign',
      title: 'Fundraising Website Redesign',
      img: '/images/coming-soon.svg',
      link: '',
    },
  ],
  Illustration: [
    {
      title: 'GOD’S EYE PROJECT',
      paragraph:
        'God’s Eye is a collection of  five art pieces, each of which presents a unique perspective on success stories from an aerial view. ',
      img: '/images/hand.png',
      link: 'https://www.behance.net/gallery/185031767/Gods-Eye',
    },
  ],
};
