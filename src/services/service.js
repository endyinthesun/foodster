import API from "./api";

export default class FoodsterService {
  async getAllRestaurantsItems() {
    try {
      const response = await API.get("/restaurantsItems/");
      return response.data;
    } catch (error) {
      throw new Error(`Something goes wrong `);
    }
  }
  async getRestaurant(id) {
    try {
      const item = await API.get(`/restaurantsItems/${id}`);
      const restaurant = await API.get(`/restaurants/${id}`);
      delete item.data.id;
      const res = Object.assign(item.data, restaurant.data);
      return res;
    } catch (error) {
      throw new Error(`Something goes wrong `);
    }
  }
}
