const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  pic: {
    name: String,
    role: {
      type: String,
      enum: ["groomer", "kennel"],
    },
  },
  totalPayment: {
    type: Number,
    default: 0,
  },
  owner_id: {
    type: String,
  },
  service_id : {
    type : mongoose.SchemaTypes.ObjectId
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
