"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/Search", ctrl.output.search);
router.get("/Product", ctrl.output.product);
module.exports = router;
