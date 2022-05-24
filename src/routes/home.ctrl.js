"use strict";

//const User = require("../../models/User");

const output ={
  home : (req, res) => {
    res.render("home/Main");
  },
  search : (req, res) => {
    res.render("home/Search");
  },
  product: (req,res)=>{
    res.render("home/Product");
  }
  };



module.exports = {
  output,
  process,
};
