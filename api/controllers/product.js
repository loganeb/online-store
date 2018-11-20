const Model = require('../model');

const { Product } = Model;

/*eslint-disable*/
const productController = {
    all (req, res) {
        // Returns all products
        Product.find({})
            .populate('Manufacturer')
            .exec((err, products) => res.json(products));
    },
    byId (req, res) {
        const idParam = req.params.id;
        // Returns a single product
        Product
            .findOne({ _id: idParam })
            .populate('Manufacturer')
            .exec((err, product) => res.json(product));

    },
    create (req, res) {
        const requestBody = req.body;
        const newProduct = new Product(requestBody);

        newProduct.save( (err, saved) => {
            Product
                .findOne({ _id: saved._id })
                .populate('Manufacturer')
                .exec((err, product) => res.json(product));
        });
    },
    update (req, res) {
        const idParam = req.params.id;
        const product = req.body;
        // Finds a product to be updated
        Product.findOne({ _id: idParam }, (err, data) => {
            // Updates the product payload
            data.name = product.name;
            data.description = product.description;
            data.image = product.image;
            data.price = product.price;
            data.manufacturer = product.manufacturer;
            // Saves the product
            data.save((err, updated) => res.json(updated));
        });
    },
    remove (req, res) {
        const idParam = req.params.id;
        // Removes a product
        Product.findOne({ _id: idParam }).deleteOne(() => res.json(idParam));
    }
}

module.exports = productController;