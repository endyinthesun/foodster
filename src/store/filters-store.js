import { makeAutoObservable } from "mobx";
class FiltersStore {
  dishFilter = "All";

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

  setOptionalFilters(arr) {
    this.optionalFilters = arr;
  }

  setCuisineFilters(arr) {
    this.cuisineFilters = arr;
  }
}

export default new FiltersStore();
