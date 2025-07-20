class SearchView {
  _parrentEl = document.querySelector('.search');
  _searchRecipies = [];

  getQuery() {
    const searchVal = this._parrentEl.querySelector('.search__field').value;
    this._clearInput();
    return searchVal;
  }

  _clearInput() {
    this._parrentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parrentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clear() {
    this._searchResultEl.innerHTML = '';
  }
}

export default new SearchView();
