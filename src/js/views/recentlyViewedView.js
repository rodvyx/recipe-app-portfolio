import View from './View.js';
import previewView from './previewView.js';

class RecentlyViewedView extends View {
  _parentElement = document.querySelector('.recently-viewed__list');
  _errorMessage = 'Recently viewed recipes will appear here.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(recipe => previewView.render(recipe, false)).join('');
  }
}

export default new RecentlyViewedView();