// eslint-disable-next-line import/extensions

import InMemoryArticles from "./inMemoryArticles.js";
import ArticlesComponent from "./articlesComponent.js";

const articlesComopnent = new ArticlesComponent(
  new InMemoryArticles([
    {
      id: "42",
      title: "Kanap name1",
      description:
        "Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuadarisus sapien gravida nulla nisl arcu.",
      imgSrc: "",
      imgAlt: "Lorem ipsum dolor sit amet, Kanap name1",
    },
    {
      id: "1",
      title: "Toto",
      description: "toto",
      imgSrc: "",
      imgAlt: "toto",
    },
  ])
);

articlesComopnent.render();
