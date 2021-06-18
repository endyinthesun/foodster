import API from "./api";

export default class FoodsterService {
  async getAllRestaurants() {
    try {
      const response = await API.get("/restaurants/");
      return response.data;
    } catch (error) {
      throw new Error(`Unable to get countries that use `);
    }
  }
  async getRestaurant(id) {
    const product = null;
    return product;
  }
}
