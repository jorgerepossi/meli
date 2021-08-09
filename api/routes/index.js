const { Router } = require('express')
const router = Router();
const fetch = require("node-fetch");
const { getPrice, getSplitResult } = require("./../utils/index");

router.get("/items/:id", async (req, res) => {

    try {

        const items = "https://api.mercadolibre.com/items/" + req.params.id;

        const itemsUrl = items;
        const response = await fetch(itemsUrl);
        const data = await response.json();

        console.log(response)
        console.log(data)

        const mapItem = Object.entries(data).map(id => id);
        const uno = mapItem.filter(({ id }) => {
            return {
                author: {
                    name: "Jorge",
                    lastname: "Repossi",
                },
                item: [
                    {
                        id: id
                    }
                ]
            }
        })
        res.send(uno)
    } catch (error) {
        console.log(error);
    }

})

router.get("/items", async (req, res) => {
    try {
        const search = "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.search + "&limit=4";

        const url = search;
        const response = await fetch(url);
        const { results } = await response.json();

        const mapResults = results.map(({ id, title, currency_id, category_id, price, shipping, thumbnail, condition,
        }) => {
            return {
                author: {
                    name: "Jorge",
                    lastname: "Repossi",
                },
                categories: [category_id],
                items: [
                    {
                        id: id,
                        title: title,
                        price: {
                            currency: currency_id,
                            amount: getPrice(price),
                            decimals: getSplitResult(price),
                        },

                        picture: thumbnail,
                        condition: condition,
                        free_shipping: shipping.free_shipping,
                    },
                ],
            };
        }
        );

        res.send(mapResults);


    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
