import { Router } from 'express';
import { Activity } from '../models/Activity';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().lean();
    response.json(activities);
  } catch (error) {
    next(error);
  }
});

activitiesRouter.post('/', async (request, response, next) => {
  try {
    const activity = await Activity.create(request.body);
    response.status(201).json(activity);
  } catch (error) {
    next(error);
  }
});

export default activitiesRouter;
