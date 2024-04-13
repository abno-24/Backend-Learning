import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
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
      required: "User",
    },
    subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
