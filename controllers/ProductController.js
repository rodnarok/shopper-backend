const Product = require("../models/Product");

const { Op } = require("sequelize");

let noProd = true;

module.exports = class ProductController {
  static async checkProduct(req, res) {
    const product = await Product.findAll({ raw: true });
    console.log("All products:", JSON.stringify(product, null, 2));
    //console.log(typeof product);
    const { code, new_price } = req.body;
    console.log("Olha o code: " + req.body.code);
    if (!code) {
      console.log(code);
      res.status(422).json({ message: "O código é obrigatório" });
      return;
    }

    if (!new_price) {
      console.log(new_price);
      res.status(422).json({
        message: `novo valor do produto de código ${code} é obrigatório`,
      });
      return;
    }

    let codigos = Object.values(product);
    //codigos.forEach((codigo) => console.log(codigo.code));
    codigos.forEach((codigo) => {
      if (code == codigo.code) {
        noProd = false;

        const cost = parseFloat(codigo.sales_price);
        const tenPercent = cost / 10;
        const newSale = cost + tenPercent;
        console.log(typeof cost);
        console.log(
          `cost: ${cost} - 10% ${tenPercent} - Novo Preço: ${new_price} - Preço atualizado ${newSale}`
        );

        if (new_price < cost) {
          return res.status(422).json({
            message: "O reasjuste não pode ser menor que o custo do produto!",
          });
        }
        if (new_price != newSale) {
          return res.status(422).json({
            message: "O reasjuste deve ser de 10% do valor atual do produto!",
          });
        }
      } else {
        noProd = true;
      }
    });

    if (noProd == true) {
      return res.status(422).json({ message: "Produto não encontrado!" });
    }
  }

  static async updateProductSave(req, res) {
    const code = req.body.code;

    const prod = {
      sales_price: req.body.new_price,
    };
    try {
      await Product.update(prod, { where: { code: code } });
      res.status(200).json({
        message: "Produto atualizado com sucesso!",
      });
    } catch (error) {
      console.log("Aconteceu um erro ao atualizar:" + error);
    }
  }
};
