import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true
    },

    items: [
      {
        name: String,
        price: Number,
        quantity: Number
      }
    ],

    totalAmount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;