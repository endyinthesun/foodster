import PizzaIcon from "@icons/dishes/pizza.svg";
import SushiIcon from "@icons/dishes/sushi.svg";
import SnacksIcon from "@icons/dishes/snacks.svg";
import LunchIcon from "@icons/dishes/lunch.svg";
import FastfoodIcon from "@icons/dishes/fastfood.svg";
import DessertsIcon from "@icons/dishes/desserts.svg";
import SaladsIcon from "@icons/dishes/salads.svg";
import SoupsIcon from "@icons/dishes/soups.svg";
import React from "react";

const id = require("shortid");

export const DISHES_DATA = [
  {
    title: "Pizza",
    subtitle: "Italian cuisine",
    id: 2,
    icon: <PizzaIcon />,
    require: require("@images/dishes/pizza_.png"),
  },
  {
    title: "Sushi",
    subtitle: "Japanese cuisine",
    id: 3,
    icon: <SushiIcon />,
    require: require("@images/dishes/sushi_.png"),
  },
  {
    title: "Snacks",
    subtitle: "Different cuisines",
    id: 4,
    icon: <SnacksIcon />,
    require: require("@images/dishes/snacks_.png"),
  },
  {
    title: "Lunch",
    subtitle: "Different cuisines",
    id: 5,
    icon: <LunchIcon />,
    require: require("@images/dishes/lunch_.png"),
  },
  {
    title: "Fastfood",
    subtitle: "American cuisine",
    id: 6,
    icon: <FastfoodIcon />,
    require: require("@images/dishes/fastfood_.png"),
  },
  {
    title: "Desserts",
    subtitle: "Different cuisines",
    id: 7,
    icon: <DessertsIcon />,
    require: require("@images/dishes/desserts_.png"),
  },
  {
    title: "Salads",
    subtitle: "Different cuisines",
    id: 8,
    icon: <SaladsIcon />,
    require: require("@images/dishes/salads_.png"),
  },
  {
    title: "Soups",
    subtitle: "Different cuisines",
    id: 9,
    icon: <SoupsIcon />,
    require: require("@images/dishes/soups_.png"),
  },
];

export const RESTAURANTS_DATA = [
  {
    placeName: "Family place",
    cuisineType: "Ukrainian cuisine",
    deliveryTime: [10, 15],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch", "Soups"],
    id: id.generate(),
  },
  {
    placeName: "Ramen Delicious",
    cuisineType: "Japanese cuisine",
    deliveryTime: [30, 45],
    rate: 4.344,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Sushi", "Fastfood", "Desserts"],
    id: id.generate(),
  },
  {
    placeName: "Bellissimo",
    cuisineType: "Italian cuisine",
    deliveryTime: [25, 30],
    rate: 4.8,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Lunch", "Fastfood", "Desserts", "Soups"],
    id: id.generate(),
  },
  {
    placeName: "Andante lake",
    cuisineType: "European cuisine",
    deliveryTime: [30, 40],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch", "Fastfood", "Desserts", "Soups"],
    id: id.generate(),
  },
  {
    placeName: "Mama mio pizza",
    cuisineType: "Italian cuisine",
    deliveryTime: [30, 40],
    rate: 4.4,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch", "Desserts", "Salads"],
    id: id.generate(),
  },
  {
    placeName: "Family Yard",
    cuisineType: "European cuisine",
    deliveryTime: [35, 45],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Fastfood", "Desserts", "Soups"],
    id: id.generate(),
  },
  {
    placeName: "Lorem",
    cuisineType: "Ukrainian cuisine",
    deliveryTime: [10, 15],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch", "Desserts", "Salads"],
    id: id.generate(),
  },
  {
    placeName: "Ipsum",
    cuisineType: "Ukrainian cuisine",
    deliveryTime: [10, 15],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Sushi", "Snacks", "Salads", "Soups"],
    id: id.generate(),
  },
  {
    placeName: "Taco Bell",
    cuisineType: "Ukrainian cuisine",
    deliveryTime: [10, 15],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch", "Fastfood", "Salads", "Soups"],
    id: id.generate(),
  },
  {
    placeName: "Subways",
    cuisineType: "Ukrainian cuisine",
    deliveryTime: [10, 15],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch", "Desserts", "Salads"],
    id: id.generate(),
  },
  {
    placeName: "Kek",
    cuisineType: "Ukrainian cuisine",
    deliveryTime: [10, 15],
    rate: 5,
    imgReq: require("@images/restaurants/img.png"),
    dishes: ["Pizza", "Snacks", "Lunch"],
    id: id.generate(),
  },
];
