import { v4 as uuidv4 } from 'uuid';
import tutorial4serangkaiImg from '../images/tutorial4serangkai.PNG';
import ExordiumImg from '../images/exordium.png';
import DSCImg from '../images/dscugm.png';
import TegukImg from '../images/teguk.png';
import VeganstoreImg from '../images/veganstore.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Exordium - PSM UGM',
    desc: 'Virtual choir concert for 50th years of PSM UGM',
    img: ExordiumImg,
  },
  {
    id: uuidv4(),
    name: 'DSC UGM Batch 2 - Senyumin UI Design',
    desc:
      'An UI Design for Senyumin app to help people to get happy and fights the insecurity.',
    img: DSCImg,
  },
  {
    id: uuidv4(),
    name: 'Teguk - UI Design',
    desc:
      'Using this UI Design for Proyek Aplikasi Dasar 1 and to make user stay hydrate~',
    img: TegukImg,
  },
  {
    id: uuidv4(),
    name: 'Vegan Store',
    desc:
      'An app (E-commerce for vegetable, fruit, meat, etc), i worked as Front End & UI/UX Designer',
    img: VeganstoreImg,
  },
  {
    id: uuidv4(),
    name: 'Digital Creative Marketing at Tutorial4Serangkai',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: tutorial4serangkaiImg,
  },
];

export default projects;
