import mongoose, { Schema, Document, Model } from "mongoose";
import { CommentDocument, commentSchema } from "./commentModeles";

// Define the Post interface
export interface PostDocument extends Document {
  title: string; // Title of the post
  content: string; // Content of the post
  comments: CommentDocument[]; // List of comments (embedded schema)
  sender: mongoose.Types.ObjectId; // Reference to the user who created the post
}

// Define the Post schema
const postSchema = new Schema<PostDocument>(
  {
    title: {
      type: String,
      required: true, // Title is mandatory
    },
    content: {
      type: String,
      required: true, // Content is mandatory
    },
    comments: [commentSchema], // Embed the Comment schema
    sender: {
      type: Schema.Types.ObjectId,
      ref: "users", // Reference to the 'users' model
      required: true,
    },
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt' fields
);

// Define the Post model
export const PostModel: Model<PostDocument> = mongoose.model<PostDocument>(
  "posts",
  postSchema
);
