const fs = require('fs');
const path = require('path');

const productFilePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = (cb) => {


    return fs.readFile(productFilePath, (err, data) => {
        console.log('file data', data);
        if (err || !data) {
            cb([])
        } else {
            const products = JSON.parse(data)
            console.log('products from file', products);
            cb(products);
        }
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
       getProductsFromFile((products) => {
           products.push(this);

           fs.writeFile(productFilePath, JSON.stringify(products), (err) => {
               console.log('file write error', err);
           })
       })
    }

    static fetchAll(fetchProductsCallback) {
        getProductsFromFile(fetchProductsCallback);
    }
}