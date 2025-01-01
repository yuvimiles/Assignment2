import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Comment interface
export interface CommentDocument extends Document {
  userId: mongoose.Types.ObjectId; 
  postId: mongoose.Types.ObjectId; 
  text: string; 
}

// Define the Comment schema
const commentSchema = new Schema<CommentDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users", // Reference to the 'users' model
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "posts", // Reference to the 'posts' model
      required: true,
    },
    text: {
      type: String,
      required: true, // Text field is mandatory
    },
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt' fields
);

// Define the Comment model
export const CommentModel: Model<CommentDocument> = mongoose.model<CommentDocument>(
  "comments",
  commentSchema
);


export { commentSchema };
