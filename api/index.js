
const express = require('express')
const app = express();
const port = process.env.PORT || 3001
const fetch = require('node-fetch');
const { getPrice, getSplitResult } = require('./utils')
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('esta bien');
})

app.get('/items', async (req, res) => {
    try {

        const search = 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.search + '&limit=4';
        console.log({ search })
        const url = search;
        const response = await fetch(url);
        const { results } = await response.json();
        const mapResults = results.map(({
            id, title, currency_id, category_id, price, shipping, thumbnail, condition
        }) => {
            return {
                author: {
                    name: 'Jorge',
                    lastname: 'Repossi'
                },
                categories: [category_id,],
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
                        free_shipping: shipping.free_shipping
                    }]

            }
        }

        );

        res.send(mapResults);

    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log('App cool')
});