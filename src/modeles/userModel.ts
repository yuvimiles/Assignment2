import mongoose, { Schema, Document, Model } from "mongoose";

// Define the User interface
export interface UserDocument extends Document {
  name: string; // User's name
  email: string; // User's email
  password: string; // User's password
}

// Define the User schema
const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true, // Name is mandatory
      trim: true, // Removes leading/trailing spaces
    },
    email: {
      type: String,
      required: true, // Email is mandatory
      unique: true, // Ensures unique emails
      lowercase: true, // Converts to lowercase
      trim: true, // Removes leading/trailing spaces
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
    },
    password: {
      type: String,
      required: true, // Password is mandatory
      minlength: 6, // Minimum length of 6 characters
    },
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt' fields
);

// Define the User model
export const UserModel: Model<UserDocument> = mongoose.model<UserDocument>(
  "users",
  userSchema
);
