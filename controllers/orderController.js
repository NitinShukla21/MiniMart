import Order from "../models/Order.js";

export const createOrder = async (req, res) => {

  try {

    const { userName, items, totalAmount } = req.body;

    const order = await Order.create({
      userName,
      items,
      totalAmount
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};