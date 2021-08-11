const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const { getPrice, getSplitResult } = require("./../utils/index");

router.get("/items/:id", async (req, res) => {
  try {
    const items = "https://api.mercadolibre.com/items/" + req.params.id;
    const response = await fetch(items);
    const data = await response.json();

    const itemsDescription =
      "https://api.mercadolibre.com/items/" + req.params.id + "/description";
    const responseItemDescription = await fetch(itemsDescription);
    const description = await responseItemDescription.json();

    const getCategory = async (category) => {
      const searchCategory =
        "https://api.mercadolibre.com/categories/" + category;
      const responsecategory = await fetch(searchCategory);
      const cate = await responsecategory.json();
      return String(cate.name);
    };

    console.log(data);

    res.send({
      author: {
        name: "Jorge",
        lastname: "Repossi",
      },
      item: {
        id: data.id,
        title: data.title,
      },
      price: {
        currency: data.currency_id,
        amount: getPrice(data.price),
        decimals: getSplitResult(data.price),
      },
      picture: data.pictures[0].url,

      condition: data.condition === "new" ? "Nuevo" : "Usado",
      shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: description.plain_text,
      category_id: await getCategory(data.category_id),
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/items", async (req, res) => {
  try {
    const search = "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.search + "&limit=4";

    const url = search;
    const response = await fetch(url);
    const { results } = await response.json();
    const cateID = results[0].category_id;

    const searchCategory = "https://api.mercadolibre.com//sites/MLA/search?category=" + cateID + "&limit=1";
    const responsecategory = await fetch(searchCategory);
    const cate = await responsecategory.json();

    const categories = cate.filters.map((item) => item.values);
    const cateValue = categories.map((item) => item.map((name) => name.path_from_root));
    const cateName = cateValue.map((catv) => {
      return catv.map(

        (name) => name.map((item) => {
          return ` ${item.name} `
        }
        ))
    })



    const mapResults = results.map(
      ({
        id,
        title,
        currency_id,
        price,
        shipping,
        thumbnail,
        condition,
        address
      }) => {
        return {
          author: {
            name: "Jorge",
            lastname: "Repossi",
          },
          categories: cateName,
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
              cond: condition,
              free_shipping: shipping.free_shipping,
            },
          ],
          address: address.state_name
        };
      }
    );

    res.send(mapResults);


  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
