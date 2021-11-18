const router = require("express").Router();
const {
  createInvoice,
  updateInvoiceStatus,
} = require("../controllers/invoiceController");

router.post("/", createInvoice);
router.patch("/", updateInvoiceStatus);

module.exports = router;
