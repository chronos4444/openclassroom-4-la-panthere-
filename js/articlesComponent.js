import ArticleComponent from "./articleComponent.js";

class ArticlesComponent {
  constructor(articleRepository) {
    this.articleRepository = articleRepository;
  }

  async render() {
    const itemsElement = document.getElementById("items");
    const articles = await this.articleRepository.getAllArticles();

    articles.forEach((article) => {
      const articleComponent = new ArticleComponent(article);
      itemsElement.appendChild(articleComponent.render());
    });
  }
}

export default ArticlesComponent;
