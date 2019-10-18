class Paginator {

    constructor(data, itemsPerPage) {
        this._data = data;
        this._itemsPerPage = itemsPerPage;
        this._currentPageNumber = null;
        this._lastpageNumber = null;
    }
    set data(data) {
        this._data = data;
        this._lastpageNumber = (this._data.length % this._itemsPerPage) == 0 ? this._data.length / this._itemsPerPage : parseInt(this._data.length / this._itemsPerPage) + 1;
    }
    set itemsPerPage(itemsPerPage) {
        this._itemsPerPage = itemsPerPage;
    }
    get data() {
        return this._data;
    }
    get itemsPerPage() {
        return this._itemsPerPage;
    }

    page(number) {
        this._currentPageNumber = number;
        return this._data.slice((number * this._itemsPerPage) - this._itemsPerPage, number * this._itemsPerPage);
    }

    lastPage() {

        this._currentPageNumber = this._lastpageNumber;
        return this._data.slice((this.pages() * this._itemsPerPage) - this._itemsPerPage, this.pages() * this._itemsPerPage);

        // return this._data.slice(this._data.length - this._itemsPerPage, this._data.length);
    }

    firstPage() {
        this._currentPageNumber = 1;
        return this._data.slice(0, this._itemsPerPage);
    }
    setItemsPerPage(number) {
        this._itemsPerPage = number;
    }

    setData(data) {
        this._data = data;
    }
    nextPage() {

        if (this._currentPageNumber == this._lastpageNumber) {
            return "this is the last page, there is no next page"
        } else {
        this._currentPageNumber = this._currentPageNumber + 1;
            return this._data.slice((this._currentPageNumber * this._itemsPerPage), (this._currentPageNumber * this._itemsPerPage) + this._itemsPerPage);
        }
    }
    prevPage() {
        if (this._currentPageNumber == 0) {
            return "this is the first page, there is no previous page"
        } else {
        this._currentPageNumber = this._currentPageNumber - 1;
            return this._data.slice((this._currentPageNumber * this._itemsPerPage) - this._itemsPerPage, this._currentPageNumber * this._itemsPerPage);
        }
    }
    pages() {
        return this._lastpageNumber;
    }
    currentPage() {
        return this._currentPageNumber;
    }
}

let p = new Paginator();
p.itemsPerPage = 4
p.data = [1, 2, 4, 5, 6, 7, 4, 5, 9, 5, 6, 7, 8, 9, 4, 2, 2, 3, 3, 4, 45, 6, 67, 8, 87]
p.page(3);