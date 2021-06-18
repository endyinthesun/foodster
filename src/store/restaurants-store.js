import { makeObservable, observable, action, makeAutoObservable } from "mobx";
class RestaurantsStore {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  writeRestaurants(arr) {
    this.data = arr;
  }
}

export default new RestaurantsStore();
