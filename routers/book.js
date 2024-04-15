const { Router } = require("express");
const { getBooks, getBook, postBook, patchBook, deleteBookById } = require("../controllers/book");

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", postBook);

router.patch("/:id", patchBook);

router.delete("/:id", deleteBookById);


module.exports = router;