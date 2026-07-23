import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    profile: {
      displayName: { type: String, trim: true },
      bio: { type: String, trim: true },
    },
  },
  { timestamps: true },
);

export const User = models.User || model('User', userSchema);
