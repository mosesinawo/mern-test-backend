import mongoose, { Document, Mongoose, mongo } from "mongoose";

export interface Itask extends Document {
  title: string;
  completed: boolean;
}

const taskSchema = new mongoose.Schema<Itask>(
  {
    title: {
      type: String,
      required: [true, "Please add a task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", taskSchema);
