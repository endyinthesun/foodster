import { makeObservable, observable, action } from "mobx";
class Filters {
  dishFilter = "All";

  optionalFilters = [];

  cuisineFilters = [];

  constructor() {
    makeObservable(this, {
      dishFilter: observable,
      optionalFilters: observable,
      cuisineFilters: observable,
      changeDishFilter: action,
      setOptionalFilters: action,
      setCuisineFilters: action,
    });
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

export default new Filters();
