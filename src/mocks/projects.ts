import CoolCo from "../assets/Coolco.jpg";
import Apes from "../assets/Apes.jpg";
import Gallery from "../assets/The-gallery.jpg";
import Cats from "../assets/Cats-and-dog.jpg";
import Ecommerce from "../assets/Ecommerce.jpg";
import PICountry from "../assets/PI-Country.jpg";

export type ProjectProps = {
  id: number;
  image: any;
  title: string;
  github: string;
  demo?: string;
  description: string;
  skill: string[];
};

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    image: CoolCo,
    title: "Coolco",
    github: "http://github.com",
    demo: "https://www.coolco.io/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 2,
    image: Apes,
    title: "Apes International",
    github: "http://github.com",
    demo: "https://www.apesgroup.net/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 3,
    image: Gallery,
    title: "The Gallery",
    github: "http://github.com",
    demo: "https://www.thegallery.live/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 4,
    image: Cats,
    title: "Cats and dogs",
    github: "http://github.com",
    demo: "https://www.catsanddogs.io/",
    description: "TO COMPLETE... building in progress...",
    skill: [
      "Media Queries - Responsive",
      "React",
      "CSS",
      "EmailJS",
      "SwiperJS",
    ],
  },
  {
    id: 5,
    image: Ecommerce,
    title: "Team Project - E-commerce Davo´s shoes",
    github: "https://github.com/Nikl4auss/henry-final-project",
    //demo: "https://github.com/Nikl4auss/henry-final-project",
    description:
      "NOT RESPONSIVE YET. The project is an e-commerce of sports shoes. Developed as a team to present at Henry's bootcamp. This project has user administration, different functionalities depending on the profile. In the administrator profile you can control and create stock, manage orders and manage registered users. The shopping cart is managed with Local Storege, you can leave the page and then resume the purchase from your cart without losing the addition! The SPA has a search bar, filters by products according to their stock, registration with Google, MeLi payment gateway and sends emails to the user with the status of their order, among other features. In addition to strengthening our technical knowledge, we have lived the experience of working as a team! with agile methodologies, organization of tasks in Trello and versioning in Github. Really great teamwork!. The technology used: Javascript | react | React-Redux | Pure CSS (modules) | Express | Node | SQL | Sequelize | Auth0 | Mailgun | MeLi payment gateway",
    skill: [
      "Javascript",
      "React",
      "Redux",
      "CSS 3",
      "Node - Express",
      "SQL - Postgres",
      "Auth0",
      "Meilgun",
      "Pasarela de pago MELI",
    ],
  },
  {
    id: 6,
    image: PICountry,
    title: "Individual Proyect - Countries Henry",
    github: "http://github.com",
    demo: "https://www.youtube.com/watch?v=2mivlbmIUsA&t=6s",
    description:
      "NOT RESPONSIVE YET. An individual project for Henry's bootcamp. It is a SPA in which requests are made to an external API, but you can also generate and add your own tourist activities for one or more countries. In this SPA, filters, searches, CRUD, paging and relations between tourist activities and one or more countries are carried out",
    skill: ["Javascript", "React", "Redux", "SQL - Postgres"],
  },
  {
    id: 7,
    image: PICountry, //cambiar imagen
    title: "Memory card game",
    github: "",
    demo: "",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 8,
    image: PICountry, //cambiar imagen
    title: "tic tac toe",
    github: "",
    demo: "",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 9,
    image: PICountry, //cambiar imagen
    title: "Sudoku",
    github: "",
    demo: "",
    description: "",
    skill: ["Javascript"],
  },
  {
    id: 10,
    image: PICountry, //cambiar imagen
    title: "buscador de peliculas",
    github: "",
    demo: "",
    description: "",
    skill: ["Javascript"],
  },
];
