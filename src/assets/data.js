import PizzaIcon from "./icons/dishes/pizza.svg";
import SushiIcon from "./icons/dishes/sushi.svg";
import SnacksIcon from "./icons/dishes/snacks.svg";
import LunchIcon from "./icons/dishes/lunch.svg";
import FastfoodIcon from "./icons/dishes/fastfood.svg";
import DessertsIcon from "./icons/dishes/desserts.svg";
import SaladsIcon from "./icons/dishes/salads.svg";
import SoupsIcon from "./icons/dishes/soups.svg";
import React from "react";

const id = require("shortid");

export const DISHES_DATA = [
  {
    title: "Pizza",
    subtitle: "Italian cuisine",
    id: 2,
    icon: <PizzaIcon />,
    require: require("./images/dishes/pizza_.png"),
  },
  {
    title: "Sushi",
    subtitle: "Japanese cuisine",
    id: 3,
    icon: <SushiIcon />,
    require: require("./images/dishes/sushi_.png"),
  },
  {
    title: "Snacks",
    subtitle: "Different cuisines",
    id: 4,
    icon: <SnacksIcon />,
    require: require("./images/dishes/snacks_.png"),
  },
  {
    title: "Lunch",
    subtitle: "Different cuisines",
    id: 5,
    icon: <LunchIcon />,
    require: require("./images/dishes/lunch_.png"),
  },
  {
    title: "Fastfood",
    subtitle: "American cuisine",
    id: 6,
    icon: <FastfoodIcon />,
    require: require("./images/dishes/fastfood_.png"),
  },
  {
    title: "Desserts",
    subtitle: "Different cuisines",
    id: 7,
    icon: <DessertsIcon />,
    require: require("./images/dishes/desserts_.png"),
  },
  {
    title: "Salads",
    subtitle: "Different cuisines",
    id: 8,
    icon: <SaladsIcon />,
    require: require("./images/dishes/salads_.png"),
  },
  {
    title: "Soups",
    subtitle: "Different cuisines",
    id: 9,
    icon: <SoupsIcon />,
    require: require("./images/dishes/soups_.png"),
  },
];

export const OPTIONAL_FILTERS_DATA = [
  {
    title: "Popular",
    id: 1,
  },
  {
    title: "Free delivery",
    id: 2,
  },
  {
    title: "Fast delivery",
    id: 3,
  },
  {
    title: "High rating",
    id: 4,
  },
];

export const CUISINE_FILTERS_DATA = [
  {
    title: "Ukrainian",
    id: 1,
  },
  {
    title: "Georgian",
    id: 2,
  },
  {
    title: "Italian",
    id: 3,
  },
  {
    title: "Asian",
    id: 4,
  },
  {
    title: "Japanese",
    id: 5,
  },
  {
    title: "British",
    id: 6,
  },
  {
    title: "European",
    id: 7,
  },
];
