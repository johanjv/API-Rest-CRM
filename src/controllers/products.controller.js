import Product from "../models/Product.js";

export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body;

    const newProduct = new Product({ name, category, price, imgURL });

    const savedProduct = await newProduct.save();

    res.json({
        message: "creating Product",
        savedProduct
    });
}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json({
        message: "get Products",
        products
    });
}

export const getProductById = (req, res) => {

}

export const updateProductById = (req, res) => {

}

export const deleteProductById = async (req, res) => {
    const products = await Product.deleteOne({ id: req.productId})

    res.json({
        message: "Product Deleted",
    });

}