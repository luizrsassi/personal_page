import express from 'express';
import create from '../controllers/user.controller.js';

const route = express.Router();

route.post("/", create);

export default route;