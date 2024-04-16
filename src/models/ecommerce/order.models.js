import mongoose from "mongoose";

const orderItems = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantiy: {
    type: Number,
    default: 1,
  },
});

const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      default: true,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderItems: [orderItems],
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "SHIPPED", "DELIVERED"],
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
