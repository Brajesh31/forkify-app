import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    console.log(this._data);
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const currPage = this._data.page;

    // Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return this._paginationNextBtnMarkup(currPage);
    }

    // Last page
    if (currPage === numPages && numPages > 1) {
      return this._paginationPrevBtnMarkup(currPage);
    }

    //Other page
    if (currPage < numPages) {
      return (
        this._paginationPrevBtnMarkup(currPage) +
        this._paginationNextBtnMarkup(currPage)
      );
    }
    // Page 1, and there are NO ther pages
    return '';
  }

  _paginationNextBtnMarkup(currPage) {
    return `
      <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }

  _paginationPrevBtnMarkup(currPage) {
    return `
      <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
    `;
  }
}

export default new PaginationView();
