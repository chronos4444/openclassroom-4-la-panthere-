class ArticlesBackendRepository {
  async getAllArticles() {
    const response = await fetch("http://localhost:3000/api/products");
    const articles = await response.json();

    return articles.map((article) => ({
      id: article._id,
      title: article.name,
      description: article.description,
      imgSrc: article.imageUrl,
      imgAlt: article.altTxt,
    }));
  }
}
export default ArticlesBackendRepository;
