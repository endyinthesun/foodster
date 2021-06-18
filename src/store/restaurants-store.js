import { makeObservable, observable, action, makeAutoObservable } from "mobx";
class RestaurantsStore {
  restaurantsData = [];

  constructor() {
    makeAutoObservable(this);
  }

  writeRestaurants(arr) {
    this.restaurantsData = arr;
  }
}

export default new RestaurantsStore();
