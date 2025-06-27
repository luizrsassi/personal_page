import express from 'express';
import { soma } from '../controllers/user.controller.js';

const route = express.Router();

route.get("/", soma);

export default route;