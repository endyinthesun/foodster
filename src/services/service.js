import API from "./api";

export default class FoodsterService {
  getAllRestaurants() {
    const response = API.get("/restaurants/");

    return response;
  }
  async getRestaurant(id) {
    const product = null;
    return product;
  }
}
