const Invoice = require("../models/Invoice");
const Queue = require("../models/Queue");
const pdfGenerate = require("../helper/generatePdf");
const {createQueue } = require('../controllers/queueController')


module.exports = {
  createInvoice: async (req, res) => {
    const { status, date, pic, service_id, totalPayment } = req.body;
    const { id } = req.owner;
    try {
      const data = await Invoice.create({
        status,
        date,
        pic,
        owner_id: id,
        totalPayment,
        service_id,
      });

      return res.status(200).json({ status: "success", data: data });
    } catch (e) {
      return res
        .status(500)
        .json({ status: "failed", message: "Error has occured !", error: e });
    }
  },
  updateInvoiceStatus: async (req, res) => {
    const { id } = req.query;

    try {
      const data = await Invoice.findByIdAndUpdate(id,{
          status : true
      });
      const q = await createQueue(req.body)
      return res.status(200).json({ status: "success", data: data  , queue :q});
    } catch (e) {
      return res
        .status(500)
        .json({ status: "failed", message: "Error has occured !", error: e });
    }
  },
};
