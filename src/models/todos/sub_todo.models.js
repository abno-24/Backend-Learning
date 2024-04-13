import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    complete: {
      type: boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
