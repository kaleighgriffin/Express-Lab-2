import express from 'express';

const routes = express.Router();

routes.get("/pizza-builder", (req, res) => {
    const toppings = ["Pepperoni", "Sausage", "Bacon", "Ham",
    "Mushroom", "Black Olive", "Green Olive", "Onion", "Banana Pepper"];
    res.render("pizza-builder", { toppings });
});

routes.get("/pizza-builder-results", (req, res) => {
    const size = req.query.size;
    const toppings: number = parseInt(req.query.toppings as string);
    const glutenFree: boolean = !!req.query.glutenFree;
    const specialInstructions = req.query.specialInstructions;
    let price = 0;
    if (size === "Small") {
        price = 7 + toppings * .5;
    } else if (size === "Medium") {
        price = 10 + toppings * 1;
    } else {
        price = 12 + toppings * 1.25;
    }
    let displayPrice = price.toFixed(2);
    res.render("pizza-builder-results", { size, toppings, glutenFree, specialInstructions, displayPrice });
});

export default routes;