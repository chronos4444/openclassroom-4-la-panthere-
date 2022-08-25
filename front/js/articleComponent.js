class ArticleComponent {
  constructor(article) {
    this.article = article;
  }

  render() {
    const articleElement = document.createElement("a");
    const { id, description, imgSrc, imgAlt, title } = this.article;
    articleElement.setAttribute("href", `./product.html?id=${id}`);
    articleElement.innerHTML = `
            <article>
                <img src=${imgSrc} alt=${imgAlt}>
                <h3 class="productName">${title}</h3>
                <p class="productDescription">${description}</p>
            </article>`;
    return articleElement;
  }
}

export default ArticleComponent;
