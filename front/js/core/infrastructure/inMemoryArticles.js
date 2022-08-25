class InMemoryArticles {
  constructor(articles) {
    this.articles = articles;
  }

  async getAllArticles() {
    return this.articles;
  }
}

export default InMemoryArticles;
