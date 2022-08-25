/* eslint-disable import/extensions */
import ArticleComponent from "./articleComponent.js";

class ArticlesComponent {
  constructor(getallarticles) {
    this.getallarticles = getallarticles;
  }

  async render() {
    const itemsElement = document.getElementById("items");
    const articles = await this.getallarticles.execute();

    articles.forEach((article) => {
      const articleComponent = new ArticleComponent(article);
      itemsElement.appendChild(articleComponent.render());
    });
  }
}

export default ArticlesComponent;
