const router = require("express").Router();
const jsonController = require("../controller/jsonController");
router.get("/", jsonController.jsonServer);
module.exports = router;
