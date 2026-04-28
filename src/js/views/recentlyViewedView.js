import View from './View.js';

class RecentlyViewedView extends View {
  _parentElement = document.querySelector('.recently-viewed__list');
  _errorMessage = 'Recently viewed recipes will appear here.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupRecipe).join('');
  }

  _generateMarkupRecipe(recipe) {
    return `
      <li class="recent-card">
        <a class="recent-card__link" href="#${recipe.id}">
          <img 
            class="recent-card__img" 
            src="${recipe.image}" 
            alt="${recipe.title}" 
            loading="lazy"
          />

          <div class="recent-card__content">
            <h4 class="recent-card__title">${recipe.title}</h4>
            <p class="recent-card__publisher">${recipe.publisher}</p>
          </div>
        </a>
      </li>
    `;
  }
}

export default new RecentlyViewedView();