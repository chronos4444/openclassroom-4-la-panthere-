/* eslint-disable import/extensions */

// import InMemoryArticles from "./inMemoryArticles.js";
import ArticlesComponent from "./articlesComponent.js";
import GetAllArticles from "./core/domain/getallarticles.js";
import ArticlesBackendRepository from "./core/infrastructure/articlesbackend.js";

// const getallarticles = new GetAllArticles(
//   new InMemoryArticles([
//     {
//       id: "07fb5b75607497b96722bda5b504926",
//       title: "Kanap Sinopé",
//       description:
//         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       imgSrc: "/front/images/kanap01.jpeg",
//       imgAlt: "Photo d'un canapé bleu, deux places",
//     },
//     {
//       id: "415b7cacb65d43b2b5c1ff70f3393ad1",
//       title: "Kanap Cyllène",
//       description:
//         "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
//       imgSrc: "/front/images/kanap02.jpeg",
//       imgAlt: "Photo d'un canapé jaune et noir, quattre places",
//     },
//   ])
// );

const getallarticles = new GetAllArticles(new ArticlesBackendRepository());
const articlesComponent = new ArticlesComponent(getallarticles);

articlesComponent.render();
