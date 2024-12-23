
const Products = require('../models/model')
async function getProducts(req, res) {
    try {
        const products = await Products.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log("Error fetching products:", error);  // Debugging log
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
}

async function getproductbyid(req, res, id) {
    try {
        const product = await Products.findById(id);
        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product)); 
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });  
            res.end(JSON.stringify({ message: 'Product Not Found' }));
        }
    } catch (error) {
       
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
}

module.exports = {
    getProducts,
    getproductbyid
};
