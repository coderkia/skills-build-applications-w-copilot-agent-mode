import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        username: 'alex_runner',
        email: 'alex.runner@example.com',
        profile: {
          displayName: 'Alex Rivera',
          bio: 'Training for a spring half marathon.',
        },
      },
      {
        username: 'maya_lifts',
        email: 'maya.lifts@example.com',
        profile: {
          displayName: 'Maya Chen',
          bio: 'Strength training fan who tracks every set.',
        },
      },
      {
        username: 'sam_cycles',
        email: 'sam.cycles@example.com',
        profile: {
          displayName: 'Sam Patel',
          bio: 'Weekend cyclist focused on endurance.',
        },
      },
      {
        username: 'jordan_yoga',
        email: 'jordan.yoga@example.com',
        profile: {
          displayName: 'Jordan Morgan',
          bio: 'Balances mobility, recovery, and mindful movement.',
        },
      },
    ]);

    await Team.insertMany([
      {
        name: 'Cardio Crew',
        description: 'Runners and cyclists building weekly endurance habits.',
        members: [users[0]._id, users[2]._id],
      },
      {
        name: 'Strength Squad',
        description: 'Friends chasing consistent lifting progress.',
        members: [users[1]._id, users[3]._id],
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'Outdoor Run',
        durationMinutes: 42,
        caloriesBurned: 430,
        completedAt: new Date('2026-07-19T07:30:00.000Z'),
      },
      {
        userId: users[1]._id,
        type: 'Lower Body Strength',
        durationMinutes: 55,
        caloriesBurned: 360,
        completedAt: new Date('2026-07-20T18:15:00.000Z'),
      },
      {
        userId: users[2]._id,
        type: 'Road Cycling',
        durationMinutes: 78,
        caloriesBurned: 690,
        completedAt: new Date('2026-07-21T06:45:00.000Z'),
      },
      {
        userId: users[3]._id,
        type: 'Power Yoga',
        durationMinutes: 35,
        caloriesBurned: 180,
        completedAt: new Date('2026-07-22T12:00:00.000Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[2]._id, points: 1420, rank: 1 },
      { userId: users[0]._id, points: 1310, rank: 2 },
      { userId: users[1]._id, points: 1185, rank: 3 },
      { userId: users[3]._id, points: 960, rank: 4 },
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Run Builder',
        description: 'A focused running session with warmup, tempo intervals, and cooldown.',
        difficulty: 'intermediate',
        durationMinutes: 45,
        exercises: ['10 minute jog', '4 x 5 minute tempo intervals', '5 minute cooldown'],
      },
      {
        title: 'Full Body Strength Circuit',
        description: 'Compound strength movements arranged for efficient total-body training.',
        difficulty: 'beginner',
        durationMinutes: 38,
        exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Plank holds'],
      },
      {
        title: 'Cycling Hill Repeats',
        description: 'Short climbs with controlled recovery to build cycling power.',
        difficulty: 'advanced',
        durationMinutes: 60,
        exercises: ['15 minute warmup', '6 hill repeats', 'Easy spin recovery'],
      },
      {
        title: 'Recovery Mobility Flow',
        description: 'Gentle mobility and stretching for rest days.',
        difficulty: 'beginner',
        durationMinutes: 25,
        exercises: ['Hip openers', 'Thoracic rotations', 'Hamstring stretches', 'Breathing reset'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
