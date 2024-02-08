const { readdirSync } = require("fs");
const reader = require("xlsx");

const processMaster = (master, root, products) => {
  if (!master) return {};
  let start = 0;
  for (let i = 1; i < master.length; i++) {
    if (master[i]["L" + root]) {
      products[master[start]["L" + root]] = processMaster(
        master.slice(start, i),
        root + 1,
        {}
      );
      start = i;
    }
  }
  if (master[start]["L" + root]) {
    products[master[start]["L" + root]] = processMaster(
      master.slice(start, master.length),
      root + 1,
      {}
    );
  }
  return products;
};

const processProducts = (products, sheets) => {
  let product = Object.keys(products);
  for (let i = 0; i < product.length; i++) {
    if (Object.keys(products[product[i]]).length === 0) {
      if (!sheets[product[i]]) {
        products[product[i]] = { leaf: true };
      } else {
        const productSheet = reader.utils.sheet_to_json(sheets[product[i]]);
        const productObj = { leaf: true };
        productObj["description"] = productSheet.reduce(
          (acc, prod) =>
            prod["Description"] ? [...acc, prod["Description"]] : acc,
          []
        );
        productObj["specifications"] = productSheet.map((prod) => [
          prod["Code"],
          prod["Size MM"],
          prod["Size Inches"],
          prod["Quantity"],
        ]);
        productObj["colors"] = productSheet.reduce(
          (acc, prod) => (prod["Colors"] ? [...acc, prod["Colors"]] : acc),
          []
        );
        let images = readdirSync(`src/assets/images/product/${product[i]}`);
        productObj["images"] = images.map(
          (image) => `assets/images/product/${product[i]}/${image}`
        );
        products[product[i]] = productObj;
      }
    } else {
      products[product[i]] = processProducts(products[product[i]], sheets);
    }
  }
  return products;
};

const getProducts = (dirname) => {
  const file = reader.readFile(dirname);
  const master = reader.utils.sheet_to_json(file.Sheets["Master"]);
  let products = processMaster(master, 1, {});
  products = processProducts(products, file.Sheets);
  return products;
};

module.exports = { getProducts };
