const express = require("express");
require("dotenv").config();
// const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT;
const colors = require("colors");
const Order = require("./models/orderModel");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const bodyParser = require("body-parser");
const menuItems = require("./assets/menu");

const sendTextMessage = require("./communication/textMessage");

const jsonParser = bodyParser.json();

const app = express();

app.use(cors());
// connect to database
connectDB();

// posting an order

//  http://localhost:4000/orders https://www.jairana.com/order www.res.com
app.post("/order", jsonParser, async (req, res) => {
  console.log(req.body);
  const order = new Order({
    fullName: req.body.fullName,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
    orderItems: req.body.orderItems,
  });
  try {
    const newOrder = await order.save();

    console.log(newOrder);

    // send text message with menu items and total
    let message = "Thank you for your order! Your order is: ";
    console.log(req.body.orderItems, message);
    let total = 0;
    const orderItem = JSON.parse(newOrder.orderItems);
    console.log(orderItem);
    Object.keys(orderItem).forEach((key) => {
      const menuItem = menuItems[key - 1];
      console.log(menuItem);
      message += `${menuItem.name} x ${orderItem[key]} `;
      total += menuItem.price * orderItem[key];
    });
    message += `Total:$${total + 0.1025 * total}`;
    console.log(message);
    res.status(201).json(newOrder);
    sendTextMessage(newOrder.phoneNumber, message);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  // res.status(201).json({ message: "Order created" });
});

app.listen(port, () => {
  console.clear();
  console.log(
    colors.yellow(
      `\nServer is running on port ${port} -> Happy coding!\n`.underline.bold
    )
  );
});
