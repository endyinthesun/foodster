import { makeAutoObservable } from "mobx";
class FiltersStore {
  dishFilter = "All";

  currentPlaceFilter = "All";

  optionalFilters = [];

  cuisineFilters = [];

  constructor() {
    makeAutoObservable(this);
  }
  clearCuisineOptionalFilters() {
    this.optionalFilters.clear();
    this.cuisineFilters.clear();
  }
  changeDishFilter(current) {
    this.dishFilter = current;
  }
  changeCurrentPlaceFilter(current) {
    this.currentPlaceFilter = current;
  }
  setOptionalFilters(arr) {
    this.optionalFilters = arr;
  }

  setCuisineFilters(arr) {
    this.cuisineFilters = arr;
  }
}

export default new FiltersStore();
