import { makeObservable, observable, action, makeAutoObservable } from "mobx";
class RestaurantsStore {
  data = [];
  newRestaurantsData = [];

  constructor() {
    makeAutoObservable(this);
  }

  writeRestaurants(arr) {
    this.data = arr;
  }
  writeNewRestaurants(arr) {
    this.newRestaurantsData = arr;
  }
}

export default new RestaurantsStore();
