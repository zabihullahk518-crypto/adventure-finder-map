import dolma from "@/assets/asali-dolma.png.asset.json";
import platter from "@/assets/asali-pastry-platter.png.asset.json";
import cheesePastry from "@/assets/asali-cheese-pastry.png.asset.json";
import wraps from "@/assets/asali-wraps.png.asset.json";
import meal from "@/assets/asali-meal.png.asset.json";
import pizza from "@/assets/asali-pizza.png.asset.json";
import pizzas from "@/assets/asali-pizzas.png.asset.json";
import storefront from "@/assets/asali-storefront.png.asset.json";

export const photos = {
  dolma: dolma.url,
  platter: platter.url,
  cheesePastry: cheesePastry.url,
  wraps: wraps.url,
  meal: meal.url,
  pizza: pizza.url,
  pizzas: pizzas.url,
  storefront: storefront.url,
};

export const menuItems = [
  { name: "Asali Special Pizza", category: "Pizza", small: "1.500", large: "2.700", image: pizza.url },
  { name: "Pizza Shawarma", category: "Pizza", small: "1.400", large: "2.600", image: pizzas.url },
  { name: "Pizza Barbecue", category: "Pizza", small: "1.500", large: "2.700", image: pizza.url },
  { name: "Pizza Vegetarian", category: "Pizza", small: "1.300", large: "2.500", image: pizzas.url },
  { name: "Labna Zatar", category: "Pastries", price: "0.800", image: platter.url },
  { name: "Cheese Zatar", category: "Pastries", price: "0.800", image: cheesePastry.url },
  { name: "Spinach Cheese", category: "Pastries", price: "0.800", image: platter.url },
  { name: "Falafel Cheese", category: "Pastries", price: "0.800", image: platter.url },
  { name: "Chicken Pastry", category: "Pastries", price: "0.750", image: wraps.url },
  { name: "Turkish Hot Pastry", category: "Pastries", price: "0.800", image: cheesePastry.url },
  { name: "Hummus / Tabbouleh / Mutabal", category: "Sides", small: "1.100", large: "2.200", image: meal.url },
  { name: "Mini Mix Pastries", category: "Sharing", price: "0.750 each", image: platter.url },
];

export const mapsUrl = "https://maps.google.com/?cid=6606123791950802938";
export const whatsappUrl = "https://wa.me/97333447008";