interface IExperience {
  id: number;
  src: string;
  title: string;
  paragraph: string;
}

export const experienceWorld: IExperience[] = [
  {
    id: 1,
    src:
      'https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480',
    title: 'Online Experiences',
    paragraph: 'Travel the world without leaving home.',
  },
  {
    id: 2,
    src:
      'https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=480',
    title: 'Experiences',
    paragraph: 'Things to do wherever you are.',
  },
  {
    id: 3,
    src:
      'https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480',
    title: 'Adventures',
    paragraph: 'Multi-day trips with meals and stays',
  },
];
