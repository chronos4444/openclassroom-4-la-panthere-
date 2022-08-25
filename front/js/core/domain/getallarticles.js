class GetAllArticles {
  constructor(articleRepository) {
    this.articleRepository = articleRepository;
  }

  async execute() {
    return this.articleRepository.getAllArticles();
  }
}

export default GetAllArticles;
