const express = require("express");

const routes = express.Router();


routes.get("/", (req,res)=>{
    return res.json({"Title":"Welcome to simple Api","Status":"Up","Version":"2"}); 
});

module.exports = routes;