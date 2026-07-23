import { Schema, model, models } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    durationMinutes: { type: Number, required: true, min: 0 },
    exercises: [{ type: String, trim: true }],
  },
  { timestamps: true },
);

export const Workout = models.Workout || model('Workout', workoutSchema);
