const { Router } = require('express')
const router = Router();
const fetch = require("node-fetch");
const { getPrice, getSplitResult } = require("./../utils/index");

router.get("/items/:id", async (req, res) => {

    try {

        const items = "https://api.mercadolibre.com/items/" + req.params.id;
        const response = await fetch(items);
        const data = await response.json();

        // description
        const itemsDescription= ("https://api.mercadolibre.com/items/" + req.params.id + "/description");
        const responseItemDescription = await fetch(itemsDescription);
        const description = await responseItemDescription.json();


        console.log(itemsDescription)

        console.log(description)
        //console.log(data)

        
        res.send({
            author: {
                name: "Jorge",
                lastname: "Repossi",
            },
            item:
            {
                id: data.id,
                title: data.title
            },
            price: {
                currency: data.currency_id,
                amount: getPrice(data.price),
                decimals: getSplitResult(data.price),
            },
            picture: data.pictures[0].url,
            condition: data.condition,
            shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: description.plain_text,

        })
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
