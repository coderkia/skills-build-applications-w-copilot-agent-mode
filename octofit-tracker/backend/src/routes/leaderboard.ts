import { Router } from 'express';
import { LeaderboardEntry } from '../models/LeaderboardEntry';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
    response.json(leaderboard);
  } catch (error) {
    next(error);
  }
});

leaderboardRouter.post('/', async (request, response, next) => {
  try {
    const leaderboardEntry = await LeaderboardEntry.create(request.body);
    response.status(201).json(leaderboardEntry);
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;
