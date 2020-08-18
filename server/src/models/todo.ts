import { ITodo } from "../types/todo";
import { model, Schema } from "mongoose";
import { stringify } from "querystring";

//defining a mongoose schema

const toDoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ITodo>("Todo", toDoSchema);
