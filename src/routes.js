const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");


routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);



//routes.get("/products", (req, res) => {
  //Product.create({
       // title: 'React Native',
       // description: 'Build native apps with Reactive',
       // url: 'http://github.com/facebook/react-native' 
   // });

    



module.exports = routes;
