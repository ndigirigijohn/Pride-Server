//products controllers

const Product = require('../models/Product');


module.exports = {
    getProducts: async (req, res) => {
        console.log('getProducts called')
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.json({ message: err });
        }
    },
    getProduct: async (req, res) => {
        try {
            const product
                = await Product.findById(req.params.id);
            res.json(product);
        } catch (err) {
            res.json({ message: err });
        }
    },
    createProduct: async (req, res) => {
        const product = new Product({
            name: req.body.name,
            price: req.body.price
        });
        try {
            const savedProduct = await product.save();
            res.json(savedProduct);
        } catch (err) {
            res.json({ message: err });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await Product
                .updateOne(
                    { _id: req.params.id },
                    {
                        $set: {
                            name: req.body.name,
                            price: req.body.price
                        }
                    }
                );
            res.json(updatedProduct);
        } catch (err) {
            res.json({ message: err });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const removedProduct = await Product
                .deleteOne({ _id: req.params.id });
            res.json(removedProduct);
        } catch (err) {
            res.json({ message: err });
        }
    }
,
                    

}