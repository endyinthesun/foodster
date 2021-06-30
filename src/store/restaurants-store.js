import { makeObservable, observable, action, makeAutoObservable } from "mobx";
class RestaurantsStore {
  data = [];
  newRestaurantsItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  writeRestaurantsItems(arr) {
    this.data = arr;
  }
  writeNewRestaurantsItems(arr) {
    this.newRestaurantsItems = arr;
  }
}

export default new RestaurantsStore();
